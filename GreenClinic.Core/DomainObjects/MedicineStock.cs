using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class MedicineStock : Entity
    {        
        public string MedicineID { get; set; }    
        public int StockNumber { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public string Description { get; set; }

        //public virtual ICollection<MedicineStockHistory> PurchaseHistories { get; set; }
        public virtual Medicine Medicine { get; set; }

    }
}
