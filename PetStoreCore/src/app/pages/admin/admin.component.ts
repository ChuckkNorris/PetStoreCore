﻿import { Component, OnInit } from '@angular/core';
import {  } from 'module';
import { PetService } from '../../services/pet.service';
import { Animal, Breed } from '../../models/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _petService: PetService) { }
  
  animalOptions: any[] = [];
  breedOptions: any[] = [];
  ngOnInit() {
      this.getAnimals();
      this.getBreeds();
    
  }

  animal: Animal = {};
  saveAnimal(animalName: string) {
    this._petService.saveAnimal(this.animal).subscribe(() => this.getAnimals());
  }

  breed: Breed = { animal: {}};
  saveBreed() {
      this._petService.saveBreed(this.breed).subscribe(() => this.getBreeds());
  }

  getAnimals() {
      this._petService.getAnimals().subscribe(animals => this.animalOptions = animals);
  }

  getBreeds() {
      this._petService.getBreeds().subscribe(breeds => this.breedOptions = breeds);
  }

}
