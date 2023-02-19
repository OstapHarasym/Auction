using Data;
using Data.Entities;
using Microsoft.EntityFrameworkCore;
using Services.DataTransferObjects.Lot.Requests;
using Services.DataTransferObjects.Lot.Responses;
using Services.Interfaces;

namespace Services.Implementation;

public class BidService : IBidService
{
    private readonly DatabaseContext _db;
    private readonly ILotHub _lotHub;
    private readonly ICurrentUser _currentUser;

    public BidService(DatabaseContext db, ILotHub lotHub, ICurrentUser currentUser)
    {
        _db = db;
        _lotHub = lotHub;
        _currentUser = currentUser;
    }
    
    public async Task<CreateBidResponse> CreateBid(CreateBidRequest request)
    {
        var lot = await _db.Lots
            .Include(x => x.Bids)
            .FirstOrDefaultAsync(x => x.Id == request.LotId);

        if (lot is null)
        {
            throw new ArgumentException("Lot does not exist.");
        }

        if (lot.Bids.Any() && request.Amount < lot.Bids.Max(x => x.Amount) + lot.BidIncrement
            || request.Amount < lot.StartingPrice + lot.BidIncrement)
        {
            throw new ArgumentException("Bid is too small.");
        }

        var bid = new BidEntity
        {
            LotId = request.LotId,
            Amount = request.Amount,
            BidTime = DateTime.UtcNow,
            BidderId = _currentUser.Id
        };
        
        lot.Bids.Add(bid);

        await _db.SaveChangesAsync();

        await _lotHub.RefreshBids(lot.Id);

        return new CreateBidResponse
        {
            Id = bid.Id,
            Amount = bid.Amount
        };
    }
}
