using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Services.Interfaces;

namespace API;

public class CurrentUser : ICurrentUser
{
    public CurrentUser(IHttpContextAccessor httpContextAccessor)
    {
        Id = Guid.Parse(httpContextAccessor.HttpContext.User.Claims.First(x => x.Type == ClaimTypes.Sid).Value);
        UniqueName = httpContextAccessor.HttpContext.User.Claims.First(x => x.Type == ClaimTypes.Name).Value;
    }
    
    public Guid Id { get; }
    
    public string UniqueName { get; }
}