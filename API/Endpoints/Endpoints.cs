using Microsoft.AspNetCore.Builder;

namespace API.Endpoints;

internal static class Endpoints
{
    internal static void MapEndpoints(this WebApplication app)
    {
        app.MapLotsEndpoints();
        app.MapBidEndpoints();
    }
}
