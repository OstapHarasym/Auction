namespace Services.Interfaces;

public interface ICurrentUser
{
    public Guid Id { get; }
    
    public string UniqueName { get; }
}