using API.Endpoints;
using API.IoC;
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);

builder.AddDbContext();
builder.AddQueries();
builder.AddServices();

var app = builder.Build();

app.UseHttpsRedirection();

app.MapEndpoints();

app.Run();
