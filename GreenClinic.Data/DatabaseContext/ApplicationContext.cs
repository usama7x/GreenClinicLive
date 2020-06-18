using GreenClinic.Core.DomainObjects;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Data.DatabaseContext
{
    interface IApplicationContext
    {

    }

    public class ApplicationContext: IdentityDbContext<IdentityUser>, IApplicationContext
    {
        readonly IConfiguration configuration;
        public ApplicationContext(IConfiguration configuration, DbContextOptions<ApplicationContext> options):base(options)
        {
            this.configuration = configuration;
           
        }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Checkup> Checkups { get; set; }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<CheckupMedicine> CheckupMedicines { get; set; }
        public DbSet<MedicineStock> MedicineStock { get; set; }
        public DbSet<MedicineStockHistory> PurchaseHistories { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<EmployeeExpenditure> EmployeeExpenditures { get; set; }
        public DbSet<Expense> Expenses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
            optionsBuilder.UseMySql(configuration.GetConnectionString("ClinicConnectionString"), x => 
            x.MigrationsAssembly(typeof(ApplicationContext).Assembly.FullName));
            base.OnConfiguring(optionsBuilder);
            

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(typeof(ApplicationContext).Assembly);
        }
    }
}
