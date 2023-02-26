using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Azure;

namespace API.Configuration.IoC;

internal static class ServiceBusIoC
{
    internal static void AddAzureServiceBus(this WebApplicationBuilder builder)
    {
        builder.Services.AddAzureClients(clientsBuilder => clientsBuilder.AddServiceBusClient(builder.Configuration["CUSTOMCONNSTR_SERVICE_BUS_WRITE"]));
    }
}