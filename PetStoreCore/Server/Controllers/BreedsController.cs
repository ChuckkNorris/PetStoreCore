using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PetStoreCore.Server.Models;
using PetStoreCore.Server.Services;

namespace PetStoreCore.Server.Controllers {
    [Route("api/[controller]")]
    public class BreedsController : Controller {
        private readonly BreedService _breedService;
        public BreedsController(BreedService breedService) {
            this._breedService = breedService;

        }

        [HttpGet]
        public IEnumerable<Breed> Get(long? animalId) {
            return _breedService.GetBreeds(animalId);
        }

        [HttpPost]
        public void Post([FromBody]Breed breedViewModel) {
            _breedService.SaveBreed(breedViewModel);
        }

    }
}
