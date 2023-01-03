FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["TemporaryEndpoints/TemporaryEndpoints.csproj", "TemporaryEndpoints/"]
RUN dotnet restore "TemporaryEndpoints/TemporaryEndpoints.csproj"
COPY . .
WORKDIR "/src/TemporaryEndpoints"
RUN dotnet build "TemporaryEndpoints.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TemporaryEndpoints.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TemporaryEndpoints.dll"]