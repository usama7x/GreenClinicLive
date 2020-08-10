using AutoMapper;
using GreenClinic.Core.DomainObjects;
using GreenClinic.Core.Views;
using GreenClinic.Services.Services.Patients;
using GreenClinic.ViewModels;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace GreenClinic.Handlers
{
    public class PatientHandler
    {
        readonly IMapper _mapper;
        readonly IPatientService _patientService;
        public PatientHandler(IMapper mapper, IPatientService patientService )
        {
            _patientService = patientService;
            _mapper = mapper;
        }


        public IQueryable<PatientView> GetPatients(string filter)
        {
            return _patientService.GetPatientViews(filter);
        }

        public async Task<PatientInfoViewModel> GetPatientInfoAsync(string id)
        {
            return await _patientService.Store.Where(x => x.Id == id).Select(x => new PatientInfoViewModel
            {
                Id = x.Id,
                FirstName = x.FirstName,
                MidName = x.MidName,
                LastName = x.LastName,
                Address = x.Address,
                Age = x.Age,
                Gender = x.Gender,
                Parentage = x.Parentage,
                PhoneNo = x.PhoneNo,
                Stamp = x.Stamp,
                Weight = x.Weight               
            }).FirstOrDefaultAsync();
        }

        public async Task<PatientView> UpsertAsync(PatientViewModel patientview)
        {
            var patient = _mapper.Map<Patient>(patientview);
            var result = await _patientService.UpsertAsync(patient);
            return _mapper.Map<PatientView>(patient);
        }
        public async Task DeletePatientAsync(string id)
        {
             await _patientService.DeleteByIdAsync(id);
        }

    }
}
