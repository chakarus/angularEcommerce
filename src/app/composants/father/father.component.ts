import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

formu=this.fb.group({
  nom:["",[Validators.required,Validators.minLength(2)]],
  prenom:["",[Validators.required,Validators.minLength(2)]],
})
tableau=[];
  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
  }
ajouter(){
this.tableau.push(this.formu.value);
}
}
