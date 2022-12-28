var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();

var app = builder.Build();
app.UseCors(options => options.WithOrigins("*").AllowAnyMethod().AllowAnyHeader());

// Data
var lots = new List<LotItem>
{
    new LotItem(1, "Painting", 174),
    new LotItem(2, "Car", 17434),
    new LotItem(3, "Horse", 3174),
    new LotItem(4, "Chair", 74),
    new LotItem(5, "Carpet", 17),
};

// Endpoints
app.MapGet("/lots", () => lots);

app.MapGet("/lots/{id}", (int id) => lots.First(x => x.Id == id));

app.MapPost("/lots", (CreateLotRequest request) =>
{
    var newLot = new LotItem(lots.Max(x => x.Id), request.Title, request.CurrentBid);
    lots.Add(newLot);
    return newLot;
});

app.MapPut("/lots", (LotItem request) =>
{
    var updatedLot = lots.First(x => x.Id == request.Id);
    lots.Remove(updatedLot);
    lots.Add(request);
    return request;
});

app.MapDelete("/lots/{id}", (int id) =>
{
    var deletedLot = lots.First(x => x.Id == id);
    lots.Remove(deletedLot);
    return Results.NoContent();
});

app.Run();

// Types
record LotItem(int Id, string Title, decimal CurrentBid);
record CreateLotRequest(string Title, decimal CurrentBid);