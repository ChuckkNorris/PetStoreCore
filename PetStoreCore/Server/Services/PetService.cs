using Microsoft.EntityFrameworkCore;
using PetStoreCore.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStoreCore.Server.Services
{
    public class PetService
    {
        private readonly PetStoreContext _petContext;
        public PetService(PetStoreContext petContext) {
            this._petContext = petContext;
        }

        public void SavePet(Pet pet) {
            Breed breed = _petContext.Breeds.Find(pet.Breed.Id);
            pet.Breed = breed;
            _petContext.Pets.Add(pet);
            _petContext.SaveChanges();
        }

        public Pet GetPet(long id) {
          Pet myPet = _petContext.Pets
              .Include(pet => pet.Breed)
              .ThenInclude(breed => breed.Animal).FirstOrDefault(p => p.Id == id);
              return myPet;
    }

        public IEnumerable<Pet> GetPets(Func<Pet, bool> petQuery = null) {
            IEnumerable<Pet> toReturn = null;
            IQueryable<Pet> petsInclude = _petContext.Pets
                .Include(pet => pet.Breed)
                .ThenInclude(breed => breed.Animal);
            if (petQuery != null)
                toReturn = petsInclude.Where(petQuery).ToList();
            else
                toReturn = petsInclude.ToList();
            return toReturn;
        }
    }
}
