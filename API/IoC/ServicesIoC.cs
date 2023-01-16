﻿using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Services.Implementation;
using Services.Interfaces;

namespace API.IoC;

internal static class ServicesIoC
{
    internal static void AddServices(this WebApplicationBuilder builder)
    {
        builder.Services.AddScoped<ILotService, LotService>();
    }
}
