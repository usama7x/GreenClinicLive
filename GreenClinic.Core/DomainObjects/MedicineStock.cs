using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class MedicineStock
    {
        public int MedicineStockID { get; set; }
        public int MedicineID { get; set; }
        public virtual Medicine Medicine { get; set; }
        public bool Availability { get; set; }
        public int Quantity { get; set; }
        public virtual ICollection<MedicineStockHistory> PurchaseHistories { get; set; }

    }
}
