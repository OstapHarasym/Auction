using Microsoft.AspNetCore.SignalR;

namespace API.Hubs;

public class LotHub : Hub
{
    public async Task SubscribeToBidsRefresh(Guid lotId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, lotId.ToString());
    }

    public override Task OnDisconnectedAsync(Exception exception)
    {
        return base.OnDisconnectedAsync(exception);
    }
}
