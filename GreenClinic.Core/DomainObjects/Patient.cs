using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class Patient : Entity
    {
        public Patient() : base() { }
            
        public int ReferenceNo { get; set; }
        [Required, MaxLength(30)]
        public string FirstName { get; set; }
        public string MidName { get; set; }
        [Required, MaxLength(30)]
        public string LastName { get; set; }
        [Required]
        public string Parentage { get; set; }
        [MaxLength(13)]
        public string PhoneNo { get; set; }
        public int Age { get; set; }
        public double Weight { get; set; }
        public Gender Gender { get; set; }
        [MaxLength(255)]
        public string Address { get; set; }
        public virtual ICollection<Checkup> Checkups { get; set; }
    }

    public enum Gender
    {
        Male,
        Female
    }
}
