using Services.DataTransferObjects.Auth;

namespace Services.Interfaces;

public interface IAuthService
{
    Task<string> Register(RegistrationRequest request);

    Task<string> Login(LoginRequest request);
}