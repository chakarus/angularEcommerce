import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  tabPersonne=[];
  nom = new FormControl();
  personneForm = new FormGroup({
    id: new FormControl('', [Validators.required,Validators.min(1)]),
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    prenom: new FormControl('', Validators.required),
    adresse: new FormGroup({
      rue:new FormControl(),
      codePostal:new FormControl(),
      ville:new FormControl()
    }),

  });

  // personneForm = new FormGroup({
    
  //   id: new FormControl(''),
  //   nom: new FormControl(''),
  //   prenom: new FormControl(''),
    
  //   adresse: new FormGroup({
  //       rue: new FormControl(''),
  //       ville: new FormControl(''),
  //       codePostal: new FormControl(''),
  //   })
  // });
  constructor() { }

  ngOnInit(): void {
  }
  afficherTout() {
    // console.log(this.personneForm.value);
   this.tabPersonne.push(this.personneForm.value)  ;
   
  this.personneForm.reset("");
}
}