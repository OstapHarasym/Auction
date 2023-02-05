using Microsoft.AspNetCore.SignalR;
using Services.Constants;
using Services.Interfaces;

namespace API.Hubs;

public class LotHubHelper : ILotHub
{
    private readonly IHubContext<LotHub> _hubContext;

    public LotHubHelper(IHubContext<LotHub> hubContext)
    {
        _hubContext = hubContext;
    }
    
    public async Task RefreshBids(Guid lotId)
    {
        await _hubContext.Clients.Group(lotId.ToString()).SendAsync(SignalRMethods.RefreshBids);
    }
}