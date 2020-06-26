using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LightQuery.EntityFrameworkCore;
using GreenClinic.Core.Views;
using GreenClinic.Handlers;

namespace GreenClinic.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientsController : Controller
    {
        readonly PatientHandler _patientHandler;
        public PatientsController(PatientHandler patientHandler)
        {
            _patientHandler = patientHandler;
        }

        [HttpGet]
        [AsyncLightQuery(forcePagination: true, defaultPageSize: 10, defaultSort: "FirstName desc")]
        [ProducesResponseType(typeof(IEnumerable<PatientView>), 200)]
        public IActionResult GetAllAsync([FromQuery] string filter)
        {
            return Ok(_patientHandler.GetPatients(filter));
        }
    }
}