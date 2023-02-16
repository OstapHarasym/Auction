using Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.EntityTypeConfiguration;

public class UserEntityConfiguration : IEntityTypeConfiguration<UserEntity>
{
    public void Configure(EntityTypeBuilder<UserEntity> builder)
    {
        builder.ToTable("Users");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.UniqueName).HasMaxLength(32);

        builder.HasIndex(x => x.UniqueName).IsUnique();

        builder.Property(x => x.PasswordHash).HasMaxLength(60).IsRequired();
    }
}