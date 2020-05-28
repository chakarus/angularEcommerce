import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { CamionComponent } from './camion/camion.component';
import { VoitureComponent } from './voiture/voiture.component';
import { ObservableComponent } from '../../composants/observable/observable.component';
import { AdresseComponent } from '../../composants/adresse/adresse.component';
import { StagiaireComponent } from '../../composants/stagiaire/stagiaire.component';
import { TableauComponent } from '../../composants/tableau/tableau.component';


@NgModule({
  declarations: [CamionComponent, VoitureComponent],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
   
  ]
})
export class VehiculeModule {
  constructor() {
    console.log('vehicule module');
  }
 }
