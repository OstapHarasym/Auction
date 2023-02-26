using Data;
using Microsoft.EntityFrameworkCore;
using Services.Interfaces;

namespace Services.Implementation;

public class EndLotService : IEndLotService
{
    private readonly DatabaseContext _db;

    public EndLotService(DatabaseContext db)
    {
        _db = db;
    }
    
    public async Task PerformEndLot(string message)
    {
        var lot = await _db.Lots.FirstAsync();
        lot.Description += message;
        await _db.SaveChangesAsync();
    }
}