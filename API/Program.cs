using API.Configuration;
using API.Configuration.IoC;
using API.Endpoints;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.AddDbContext();
builder.AddQueries();
builder.AddServices();
builder.AddAuthentication();
builder.AddCors();
builder.AddAzureServiceBus();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapEndpoints();

app.UseSwagger();
app.UseSwaggerUI();

app.Run();
