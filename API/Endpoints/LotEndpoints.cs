using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Queries.Interfaces;
using Services.DataTransferObjects.Lot.Requests;
using Services.Interfaces;

namespace API.Endpoints;

internal static class LotEndpoints
{
    internal static void MapLotsEndpoints(this WebApplication app)
    {
        app.MapGet("lots", (ILotQueries service)
            => Results.Ok(service.GetLots()));

        app.MapGet("lots/{id}", (ILotQueries service, Guid id)
            => Results.Ok(service.GetLot(id)));

        app.MapPost("lots", async (ILotService service, CreateLotRequest request) 
            => Results.Ok(await service.CreateLot(request)))
            .RequireAuthorization();
    }
}
