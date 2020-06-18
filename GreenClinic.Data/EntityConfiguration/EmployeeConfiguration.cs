using GreenClinic.Core.DomainObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Data.EntityConfiguration
{
    class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.HasMany<EmployeeExpenditure>(x => x.Expenditures)
                 .WithOne(e => e.Employee)
                 .HasForeignKey(f => f.EmployeeID)
                 .IsRequired(true)
                 .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
