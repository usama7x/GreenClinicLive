using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class CheckupMedicine : Entity
    {        
        public string CheckupID { get; set; }
        public virtual Checkup Checkup { get; set; }
        public string MedicineID { get; set; }
        public virtual Medicine Medicine { get; set; }
        public byte Quantity { get; set; }

    }
}
