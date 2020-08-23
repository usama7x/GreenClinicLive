using GreenClinic.Core.DomainObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Data.EntityConfiguration
{
    public class MedicineConfiguration : IEntityTypeConfiguration<Medicine>
    {
        public void Configure(EntityTypeBuilder<Medicine> builder)
        {
                builder.HasAlternateKey(x => x.UniqueId);
                builder.Property(x => x.UniqueId).ValueGeneratedOnAdd();
                builder.HasMany<CheckupMedicine>(c => c.Checkups)
                .WithOne(m => m.Medicine)
                .HasForeignKey(f => f.MedicineID)
                .IsRequired(true)
                .OnDelete(DeleteBehavior.Restrict);
            
                builder.HasMany<MedicineStock>(x => x.Stock)
                .WithOne(x => x.Medicine)
                .HasForeignKey(x => x.MedicineID)
                .IsRequired(true)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
