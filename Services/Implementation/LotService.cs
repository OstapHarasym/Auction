using Data;
using Data.Entities;
using Services.DataTransferObjects.Lot.Requests;
using Services.DataTransferObjects.Lot.Responses;
using Services.Interfaces;

namespace Services.Implementation;

public class LotService : ILotService
{
    private readonly DatabaseContext _db;

    public LotService(DatabaseContext db)
    {
        _db = db;
    }

    public CreateLotResponse CreateLot(CreateLotRequest request)
    {
        var lotEntity = new LotEntity
        {
            Title = request.Title,
            StartingPrice = request.StartingPrice,
            BidIncrement = request.BidIncrement
        };

        _db.Add(lotEntity);

        _db.SaveChanges();

        return new CreateLotResponse
        {
            Id = lotEntity.Id
        };
    }
}
