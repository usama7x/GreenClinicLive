using GreenClinic.Core.DomainObjects;
using GreenClinic.Core.Extensions;
using GreenClinic.Core.Views;
using GreenClinic.Data.Repositories.GenericRepository;
using GreenClinic.Services.Services.CrudService;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GreenClinic.Services.Services.Patients
{
    public interface IPatientService: ICrudService<Patient>
    {
        IQueryable<PatientView> GetPatientViews(string filter);
       
    }
    public class PatientService : CrudService<Patient>, IPatientService
    {
        private readonly IRepository<Patient> _patientRepository;
      
        public PatientService(IRepository<Patient> patientRepository): base(patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public IQueryable<PatientView> GetPatientViews(string filter)
        {
            var predicate = PredicateBuilder.True<Patient>();
            if(!string.IsNullOrEmpty(filter))
                predicate = predicate.And(x => EF.Functions.Like(x.FirstName, $"%{filter}%") ||
                                    EF.Functions.Like(x.LastName, $"%{filter}%") ||
                                    EF.Functions.Like(x.MidName, $"%{filter}%") ||
                                    EF.Functions.Like(x.PhoneNo, $"%{filter}%") ||
                                    EF.Functions.Like(x.Parentage, $"%{filter}%") ||
                                    EF.Functions.Like(x.Age, $"%{filter}%") ||
                                    EF.Functions.Like(x.Weight, $"%{filter}%") ||
                                    EF.Functions.Like(x.PhoneNo, $"%{filter}%") ||
                                    EF.Functions.Like(x.Address, $"%{filter}%"));
           
            return Store.Where(predicate).Select(x => new PatientView
            {
                Id = x.Id,
                FirstName = x.FirstName,
                MidName = x.MidName,
                LastName = x.LastName,
                Age = x.Age,
                Weight = x.Weight,
                Parentage = x.Parentage,
                Address = x.Address,
                Gender = x.Gender,               
                PhoneNo = x.PhoneNo,
                Stamp = x.Stamp
            });

        }
    }
}
