using AutoMapper;
using GreenClinic.Core.Views;
using GreenClinic.Services.Services.Patients;
using System;
using System.Collections.Generic;
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
    }
}
