using Data;
using Microsoft.EntityFrameworkCore;
using Queries.DataTransferObjects.Bid.Responses;
using Queries.Interfaces;

namespace Queries.Implementation;

public class BidQueries : IBidQueries
{
    private readonly DatabaseContext _db;

    public BidQueries(DatabaseContext db)
    {
        _db = db;
    }

    public async Task<List<GetBidsResponse>> GetBids(Guid lotId)
    {
        return await _db.Bids
            .Where(x => x.LotId == lotId)
            .Select(x => new GetBidsResponse
            {
                Id = x.Id,
                Amount = x.Amount,
                BidderName = x.Bidder.UniqueName,
                BidTime = x.BidTime
            })
            .OrderByDescending(x => x.BidTime)
            .ToListAsync();
    }
}
