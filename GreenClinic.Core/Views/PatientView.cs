using GreenClinic.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Core.Views
{
    public class PatientView
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
