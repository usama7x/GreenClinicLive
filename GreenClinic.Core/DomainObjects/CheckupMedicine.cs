using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class CheckupMedicine
    {
        public int CheckupMedicineId { get; set; }
        public int CheckupID { get; set; }
        public virtual Checkup Checkup { get; set; }
        public int MedicineID { get; set; }
        public virtual Medicine Medicine { get; set; }
        public byte Quantity { get; set; }

    }
}
