using Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace API.Configuration.IoC;

internal static class DbContextIoC
{
    internal static void AddDbContext(this WebApplicationBuilder builder)
    {
        builder.Services.AddDbContext<DatabaseContext>(options => options.UseNpgsql(builder.Configuration["POSTGRESQLCONNSTR_AUCTION_DATABASE"]));
    }
}
