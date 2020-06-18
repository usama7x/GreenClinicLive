using GreenClinic.Core.DomainObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Data.EntityConfiguration
{
    public class CheckupMedicineConfiguration : IEntityTypeConfiguration<CheckupMedicine>
    {
        public void Configure(EntityTypeBuilder<CheckupMedicine> builder)
        {
            builder.HasKey(cm => new { cm.CheckupID, cm.MedicineID });
        }
    }
}
