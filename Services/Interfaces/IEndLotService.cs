namespace Services.Interfaces;

public interface IEndLotService
{
    Task PerformEndLot(string message);
}