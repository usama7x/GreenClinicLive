using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Core.DomainObjects
{
    public class Entity
    {
        public Entity()
        {
            Id = Guid.NewGuid().ToString();
            Stamp = DateTime.Now;
        }
        public string Id { get; set; }
        public DateTime Stamp { get; set; }
    }
}
