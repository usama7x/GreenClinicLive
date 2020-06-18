using GreenClinic.Core.DomainObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Data.EntityConfiguration
{
    public class CheckupConfiguration : IEntityTypeConfiguration<Checkup>
    {
        public void Configure(EntityTypeBuilder<Checkup> builder)
        {
            builder.HasKey(x => x.CheckupID);
            builder.HasMany<CheckupMedicine>(c => c.Medicines)
            .WithOne(c => c.Checkup)
            .HasForeignKey(f => f.CheckupID)
            .IsRequired(true)
            .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
