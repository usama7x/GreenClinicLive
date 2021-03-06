﻿using GreenClinic.Core.Views;
using GreenClinic.Handlers;
using GreenClinic.ViewModels;
using LightQuery.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenClinic.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController : ControllerBase
    {
        readonly PatientHandler _patientHandler;
        public PatientController(PatientHandler patientHandler)
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

        [HttpPut("updatePatient")]
        public async Task<IActionResult> PutAsync(PatientViewModel patientView)
        {
            return Ok(await _patientHandler.UpsertAsync(patientView));
        }
    }
}