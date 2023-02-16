using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Services.DataTransferObjects.Auth;
using Services.Interfaces;

namespace API.Endpoints;

internal static class AuthEndpoints
{
    internal static void MapAuthEndpoints(this WebApplication app)
    {
        app.MapPost("register", async (IAuthService service, RegistrationRequest request)
            => Results.Ok(await service.Register(request)));
        
        app.MapPost("login", async (IAuthService service, LoginRequest request)
            => Results.Ok(await service.Login(request)));

        app.MapPost("refresh-token", () => Results.Ok());
    }
}