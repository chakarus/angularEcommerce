import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
texte:string='';
couleur:string='';
nom='';
prenom='';
noms=[];
prenoms=[];

tableauTexte=[];
tableauCouleur=[];
  constructor() { }

  ngOnInit(): void {
  }
ajouter(){
this.noms.push(this.nom);
this.prenoms.push(this.prenom);
}
ajouterCouleur(){
  this.tableauTexte.push(this.texte);
  
  }
}
