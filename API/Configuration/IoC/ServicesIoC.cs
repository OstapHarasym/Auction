using API.Hubs;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Services.Implementation;
using Services.Interfaces;

namespace API.Configuration.IoC;

internal static class ServicesIoC
{
    internal static void AddServices(this WebApplicationBuilder builder)
    {
        builder.Services.AddScoped<ILotService, LotService>();
        builder.Services.AddScoped<IBidService, BidService>();
        builder.Services.AddScoped<ILotHub, LotHubHelper>();
        builder.Services.AddScoped<IAuthService, AuthService>();
    }
}
