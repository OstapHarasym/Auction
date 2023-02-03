using Services.DataTransferObjects.Lot.Requests;
using Services.DataTransferObjects.Lot.Responses;

namespace Services.Interfaces;

public interface IBidService
{
    Task<CreateBidResponse> CreateBid(CreateBidRequest request);
}
