using API.Configuration;
using API.Configuration.IoC;
using API.Endpoints;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.AddDbContext();
builder.AddQueries();
builder.AddServices();
builder.Services.AddSignalR();

builder.AddCors();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors();

app.MapEndpoints();

app.Run();
