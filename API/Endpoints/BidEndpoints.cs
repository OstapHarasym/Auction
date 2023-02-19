using API.Hubs;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Queries.Interfaces;
using Services.DataTransferObjects.Lot.Requests;
using Services.Interfaces;

namespace API.Endpoints;

internal static class BidEndpoints
{
    internal static void MapBidEndpoints(this WebApplication app)
    {
        app.MapGet("bids", async (IBidQueries service, Guid lotId)
            => Results.Ok(await service.GetBids(lotId)));

        app.MapPost("bids", async (IBidService service, CreateBidRequest request)
            => Results.Ok(await service.CreateBid(request)))
            .RequireAuthorization();
        
        app.MapHub<LotHub>("bids/connect");
    }
}
