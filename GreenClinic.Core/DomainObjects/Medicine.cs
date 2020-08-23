using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class Medicine : Entity
    {        

        [Required, MaxLength(80)]
        public string MedicineName { get; set; }
        public int UniqueId { get; set; }
        public string Abbreviation { get; set; }

        [MaxLength(50)]
        public string MedicineType { get; set; }
        public virtual ICollection<MedicineStock> Stock{ get; set; }
         
        public virtual ICollection<CheckupMedicine> Checkups { get; set; }
    }
}
