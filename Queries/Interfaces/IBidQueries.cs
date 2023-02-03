using Queries.DataTransferObjects.Bid.Responses;

namespace Queries.Interfaces;

public interface IBidQueries
{
    Task<List<GetBidsResponse>> GetBids(Guid lotId);
}
