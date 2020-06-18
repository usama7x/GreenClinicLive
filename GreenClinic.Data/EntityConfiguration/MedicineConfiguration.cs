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
               builder.HasOne<MedicineStock>(s => s.Stock)
               .WithOne(m => m.Medicine)
               .HasForeignKey<MedicineStock>(f => f.MedicineID);

                builder.HasMany<CheckupMedicine>(c => c.Checkups)
                .WithOne(m => m.Medicine)
                .HasForeignKey(f => f.MedicineID)
                .IsRequired(true)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
