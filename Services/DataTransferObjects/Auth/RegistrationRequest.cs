namespace Services.DataTransferObjects.Auth;

public class RegistrationRequest
{
    public string UniqueName { get; set; }
    
    public string Password { get; set; }
}