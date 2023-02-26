using Azure.Messaging.ServiceBus;
using Data;
using Data.Entities;
using Services.DataTransferObjects.Lot.Requests;
using Services.DataTransferObjects.Lot.Responses;
using Services.Interfaces;

namespace Services.Implementation;

public class LotService : ILotService
{
    private readonly DatabaseContext _db;
    private readonly ICurrentUser _currentUser;
    private readonly ServiceBusSender _serviceBusSender;

    public LotService(DatabaseContext db, ICurrentUser currentUser, ServiceBusClient serviceBusClient)
    {
        _db = db;
        _currentUser = currentUser;
        _serviceBusSender = serviceBusClient.CreateSender("lotend");
    }

    public async Task<CreateLotResponse> CreateLot(CreateLotRequest request)
    {
        var lotEntity = new LotEntity
        {
            Title = request.Title,
            Description = request.Description,
            StartingPrice = request.StartingPrice,
            BidIncrement = request.BidIncrement,
            Start = request.Start,
            End = request.End,
            SellerId = _currentUser.Id
        };

        await _db.AddAsync(lotEntity);

        await _db.SaveChangesAsync();

        await _serviceBusSender.ScheduleMessageAsync(new (lotEntity.Id.ToString()), request.End);

        return new CreateLotResponse
        {
            Id = lotEntity.Id
        };
    }
}
