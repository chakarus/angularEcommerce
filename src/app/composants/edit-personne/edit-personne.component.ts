import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { PersonneComponent } from '../personne/personne.component';
import { PersonneService } from 'src/app/services/personne.service';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent  implements OnInit {
  personnes: Array<Personne> = [];
  id: number ;
  personneForm = this.fb.group({
    id: [],
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', Validators.required],
    adresses: this.fb.array([
      // this.fb.group({
      //   rue: ['', Validators.required],
      //   codePostal: ['', Validators.required],
      //   ville: ['', Validators.required],
      // })
    ])
  });
  constructor(private fb: FormBuilder, private personneService: PersonneService, private route: ActivatedRoute, private router: Router) {
  }
  get adresses() {
    return this.personneForm.get('adresses') as FormArray;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.id = +data.get('id');
      this.personneService.getPersonne(this.id).subscribe(res => {
        res.adresses.forEach(adr => this.ajouterAdresse());
        this.personneForm.patchValue(res);
      });
    });
  }
  modifierPersonne() {
    this.personneService.editPersonne(this.personneForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/personne');
      }
    );
  }

  ajouterAdresse() {
    this.adresses.push(this.fb.group({
      rue: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
    }));
  }
  supprimerAdresse(id: number) {
    console.log(id);
    this.adresses.removeAt(id);
    this.personneService.editPersonne(this.personneForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/editpersonne/' + this.id);
      }
    );
  }


}