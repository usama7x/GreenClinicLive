using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class Checkup: Entity
    {        
        public string PatientID { get; set; }
        public virtual Patient Patient { get; set; }
        public string Findings { get; set; }
        public string Allergy { get; set; }
        public string Refrain { get; set; }
        public int AmountCharged { get; set; }
        public DateTime TimeStamp { get; set; }
        public int Duration { get; set; }

        public virtual ICollection<CheckupMedicine> Medicines { get; set; }

    }
}
