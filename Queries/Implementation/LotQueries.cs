using Data;
using Queries.DataTransferObjects.Lot.Responses;
using Queries.Interfaces;

namespace Queries.Implementation;

public class LotQueries : ILotQueries
{
    private readonly DatabaseContext _db;

    public LotQueries(DatabaseContext db)
    {
        _db = db;
    }

    public GetLotsResponse GetLots()
    {
        var query = _db.Lots;

        var lots = query.Select(x => new GetLotsResponseItem
        {
            Id = x.Id,
            Title = x.Title,
            StartingPrice = x.StartingPrice,
            BidIncrement = x.BidIncrement
        }).ToArray();

        var totalCount = query.Count();

        return new GetLotsResponse
        {
            Lots = lots,
            TotalCount = totalCount
        };
    }

    public GetLotResponse GetLot(Guid id)
    {
        var lot = _db.Lots.Select(x => new GetLotResponse
        {
            Id = x.Id,
            Title = x.Title,
            StartingPrice = x.StartingPrice,
            BidIncrement = x.BidIncrement,
            Description = x.Description,
            SellerName = x.Seller.UniqueName
        }).FirstOrDefault(x => x.Id == id);

        if (lot is null)
        {
            throw new ArgumentException();
        }

        return lot;
    }
}
