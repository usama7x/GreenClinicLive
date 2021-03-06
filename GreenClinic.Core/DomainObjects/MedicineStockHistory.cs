﻿using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class MedicineStockHistory : Entity
    {        
        public string MedicineStockID { get; set; }
        public virtual MedicineStock MedicineStock { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        public DateTime TimeStamp { get; set; }

    }
}
