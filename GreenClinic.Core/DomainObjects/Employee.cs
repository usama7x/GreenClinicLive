using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class Employee
    {
        public int EmployeeID { get; set; }

        [Required, MaxLength(30)]
        public string FirstName { get; set; }

        [Required, MaxLength(30)]
        public string LastName { get; set; }
        public string PhoneNo { get; set; }

        [Required]
        public int Salary { get; set; }
        public string CNIC { get; set; }

        [MaxLength(255)]
        public string Address { get; set; }

        public virtual ICollection<EmployeeExpenditure> Expenditures { get; set; }
    }
}
