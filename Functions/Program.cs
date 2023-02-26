using System.Configuration;
using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Services.Implementation;
using Services.Interfaces;

var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .ConfigureServices(services =>
    {
        services.AddDbContext<DatabaseContext>(options => options.UseNpgsql(System.Environment.GetEnvironmentVariable("POSTGRESQLCONNSTR_AUCTION_DATABASE")));
        services.AddScoped<IEndLotService, EndLotService>();
    })
    .Build();

host.Run();