using AutoMapper;
using GreenClinic.Core.DomainObjects;
using GreenClinic.Core.Views;
using GreenClinic.Services.Services.Patients;
using GreenClinic.ViewModels;
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
        
        public async Task<PatientView> UpsertAsync(PatientViewModel patientview)
        {
            var patient = _mapper.Map<Patient>(patientview);
            var result = await _patientService.UpsertAsync(patient);
            return _mapper.Map<PatientView>(patient);
        }
    }
}
