using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace API.Configuration;

internal static class Cors
{
    internal static void AddCors(this WebApplicationBuilder builder)
    {
        // TODO: Configure CORS for local and production environments

        builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy
            .WithOrigins("https://green-water-0f69d6810.2.azurestaticapps.net")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
        ));
    }
}
