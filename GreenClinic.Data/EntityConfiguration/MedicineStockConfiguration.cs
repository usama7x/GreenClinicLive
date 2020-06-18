using GreenClinic.Core.DomainObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Data.EntityConfiguration
{
    class MedicineStockConfiguration : IEntityTypeConfiguration<MedicineStock>
    {
        public void Configure(EntityTypeBuilder<MedicineStock> builder)
        {
            builder.HasMany<MedicineStockHistory>(h => h.PurchaseHistories)
                .WithOne(s => s.MedicineStock)
                .HasForeignKey(f => f.MedicineStockID)
                .IsRequired(true)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
