using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class Medicine
    {
        public int MedicineID { get; set; }

        [Required, MaxLength(50)]
        public string MedicineName { get; set; }

        [Required, MaxLength(50)]
        public string MedicineType { get; set; }
        public virtual MedicineStock Stock { get; set; }

        public virtual ICollection<CheckupMedicine> Checkups { get; set; }
    }
}
