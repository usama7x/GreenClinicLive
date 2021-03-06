﻿using GreenClinic.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenClinic.ViewModels
{
    public class PatientViewModel
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string MidName { get; set; }
        public string LastName { get; set; }
        public string Parentage { get; set; }
        public string PhoneNo { get; set; }
        public double Age { get; set; }
        public double Weight { get; set; }
        public Gender Gender { get; set; }
        public string Address { get; set; }
        public DateTime Stamp { get; set; }
    }

}
