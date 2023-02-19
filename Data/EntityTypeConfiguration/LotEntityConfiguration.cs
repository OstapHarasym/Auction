using Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.EntityTypeConfiguration;

public class LotEntityConfiguration : IEntityTypeConfiguration<LotEntity>
{
    public void Configure(EntityTypeBuilder<LotEntity> builder)
    {
        builder.ToTable("Lots");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Title).HasMaxLength(64);

        builder.Property(x => x.Description).HasMaxLength(1024);

        builder.HasOne(x => x.Seller)
            .WithMany(x => x.Lots)
            .HasForeignKey(x => x.SellerId);
    }
}
