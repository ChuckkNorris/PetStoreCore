using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStoreCore.Server.Models
{
    public class Breed : BaseModel
    {
        public string Name { get; set; }
        public Animal Animal { get; set; }
    }
   
}
