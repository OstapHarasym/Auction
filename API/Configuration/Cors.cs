using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace API.Configuration;

internal static class Cors
{
    internal static void AddCors(this WebApplicationBuilder builder)
    {
        const string cloudOrigin = "https://green-water-0f69d6810.2.azurestaticapps.net";
        const string localOrigin = "http://localhost:5173";
        
        builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy
            .WithOrigins($"{cloudOrigin},{localOrigin}")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
        ));
    }
}
