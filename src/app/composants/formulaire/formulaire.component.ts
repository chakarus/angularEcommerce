import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  personne: Personne = {};
 
  tabPersonne:Array<Personne>=[];
nom ="wick";
  constructor() { }

  ngOnInit(): void {
  }
  afficherNom(value){
console.log(value);
  }

  ajouter() {
  
   this.tabPersonne.push({...this.personne});
   this.personne={};
  }

}
