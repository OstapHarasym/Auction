using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Data;
using Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Services.DataTransferObjects.Auth;
using Services.Interfaces;

namespace Services.Implementation;

public class AuthService : IAuthService
{
    private readonly DatabaseContext _db;
    private readonly IConfiguration _configuration;

    public AuthService(DatabaseContext db, IConfiguration configuration)
    {
        _db = db;
        _configuration = configuration;
    }
    
    public async Task<string> Register(RegistrationRequest request)
    {
        var isUsernameInUse = await _db.Users
            .AnyAsync(x => x.UniqueName == request.UniqueName);

        if (isUsernameInUse)
        {
            throw new Exception("The username is currently in use.");
        }
        
        var passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);

        var user = new UserEntity
        {
            UniqueName = request.UniqueName,
            PasswordHash = passwordHash
        };
        
        await _db.Users.AddAsync(user);
        await _db.SaveChangesAsync();

        var loginRequest = new LoginRequest
        {
            UniqueName = user.UniqueName,
            Password = request.Password
        };

        var token = await Login(loginRequest);

        return token;
    }

    public async Task<string> Login(LoginRequest request)
    {
        var user = await _db.Users
            .FirstOrDefaultAsync(x => x.UniqueName == request.UniqueName);

        if (user is null)
        {
            throw new Exception("The username or password is incorrect.");
        }

        var isPasswordCorrect = BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash);

        if (!isPasswordCorrect)
        {
            throw new Exception("The username or password is incorrect.");
        }

        var token = CreateToken(request);

        return token;
    }

    private string CreateToken(LoginRequest user)
    {
        var claims = new List<Claim> {
            new (ClaimTypes.Name, user.UniqueName)
        };

        var secret = _configuration.GetSection("SECURITY_SECRET").Value!;

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret));

        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddDays(1),
            signingCredentials: credentials
        );

        var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        return jwt;
    }
}