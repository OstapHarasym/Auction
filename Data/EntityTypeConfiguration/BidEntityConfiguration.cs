using Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.EntityTypeConfiguration;

public class BidEntityConfiguration : IEntityTypeConfiguration<BidEntity>
{
    public void Configure(EntityTypeBuilder<BidEntity> builder)
    {
        builder.ToTable("Bids");

        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.Lot)
            .WithMany(x => x.Bids)
            .HasForeignKey(x => x.LotId);
    }
}