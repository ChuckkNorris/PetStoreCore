import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { ActivatedRoute } from '@angular/router';

import { Pet } from '../../models/models'

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _petService: PetService) { }
  myPet: Pet = {};
  ngOnInit() {
      this._activatedRoute.params.subscribe(params => {
          let id = +params['id'];
          this._petService.getPet(id).subscribe(pet => {
              console.log(pet);
              this.myPet = pet;
          })
      });
      
  }

}
