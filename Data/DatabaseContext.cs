using Data.Entities;
using Data.EntityTypeConfiguration;
using Microsoft.EntityFrameworkCore;

namespace Data;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

    public DbSet<LotEntity> Lots { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfiguration(new LotEntityConfiguration());
    }
}
