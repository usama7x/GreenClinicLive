using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class Expense : Entity
    {        
        [Required, MaxLength(50)]
        public string Type { get; set; }
        [Required]
        public int Amount { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
