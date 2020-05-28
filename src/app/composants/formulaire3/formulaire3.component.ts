import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire3',
  templateUrl: './formulaire3.component.html',
  styleUrls: ['./formulaire3.component.css']
})
export class Formulaire3Component implements OnInit {

formulaire= this.fb.group({
  nom:["",Validators.required],
  prenom:["",Validators.required]
})

  constructor(private fb  : FormBuilder) { }

  ngOnInit(): void {
  }
ajouter(){
  
}
}
