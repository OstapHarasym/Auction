namespace Services.Interfaces;

public interface ILotHub
{
    Task RefreshBids(Guid lotId);
}