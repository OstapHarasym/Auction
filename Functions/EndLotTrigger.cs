using Microsoft.Azure.Functions.Worker;
using Services.Interfaces;

namespace Functions;

public class EndLotTrigger
{
    private readonly IEndLotService _lotService;
    
    public EndLotTrigger(IEndLotService lotService)
    {
        _lotService = lotService;
    }
    
    [Function("EndLotTrigger")]
    public async Task Run([ServiceBusTrigger("lotend", Connection = "AzureWebJobsServiceBus")] string myQueueItem, FunctionContext context)
    {
        await _lotService.PerformEndLot(myQueueItem);
    }
}