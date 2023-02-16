namespace Data.Entities;

public class UserEntity
{
    public Guid Id { get; set; }

    public string UniqueName { get; set; }
    
    public string PasswordHash { get; set; }
}