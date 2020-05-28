import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-builder',
  templateUrl: './formulaire-builder.component.html',
  styleUrls: ['./formulaire-builder.component.css']
})
export class FormulaireBuilderComponent implements OnInit {

  monFormulaire = this.fb.group({
    nom:["", Validators.required],
    prenom:["", Validators.required],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  ajouter() {

  }
}
