﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class EmployeeExpenditure : Entity
    {        
        public string EmployeeID { get; set; }
        public virtual Employee Employee { get; set; }
        [Required]
        public int Amount { get; set; }
        [Required, MaxLength(50)]
        public string Reason { get; set; }
        public DateTime TimeStamp { get; set; }


    }
}
