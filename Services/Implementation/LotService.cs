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

    public LotService(DatabaseContext db, ICurrentUser currentUser)
    {
        _db = db;
        _currentUser = currentUser;
    }

    public CreateLotResponse CreateLot(CreateLotRequest request)
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

        _db.Add(lotEntity);

        _db.SaveChanges();

        return new CreateLotResponse
        {
            Id = lotEntity.Id
        };
    }
}
