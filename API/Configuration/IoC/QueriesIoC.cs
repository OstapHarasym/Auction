using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Queries.Implementation;
using Queries.Interfaces;

namespace API.Configuration.IoC;

internal static class QueriesIoC
{
    internal static void AddQueries(this WebApplicationBuilder builder)
    {
        builder.Services.AddScoped<ILotQueries, LotQueries>();
    }
}
