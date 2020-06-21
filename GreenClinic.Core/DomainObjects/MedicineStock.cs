using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class MedicineStock : Entity
    {        
        public string MedicineID { get; set; }
        public virtual Medicine Medicine { get; set; }
        public bool Availability { get; set; }
        public int Quantity { get; set; }
        public virtual ICollection<MedicineStockHistory> PurchaseHistories { get; set; }

    }
}
