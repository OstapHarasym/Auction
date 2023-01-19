using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace API.Configuration;

internal static class Cors
{
    internal static void AddCors(this WebApplicationBuilder builder)
    {
        // TODO: Configure CORS for local and production enviroments

        builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));
    }
}
