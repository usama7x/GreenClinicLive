using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Core.Views
{
    public class MedicineStockView
    {
        public string Id { get; set; }
        public DateTime Stamp { get; set; }
        public string MedicineName { get; set; }
        public string MedicineType { get; set; }
        public bool IsInStock { get; set; }
        public double AvailableQuantity { get; set; }
    }
}
