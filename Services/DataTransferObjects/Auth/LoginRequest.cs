namespace Services.DataTransferObjects.Auth;

public class LoginRequest
{
    public string UniqueName { get; set; }
    
    public string Password { get; set; }
}