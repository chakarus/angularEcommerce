import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { observable } from 'rxjs';
import { ObservableComponent } from './composants/observable/observable.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { TableauComponent } from './composants/tableau/tableau.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { FormComponent } from './composants/form/form.component';
import { PereComponent } from './composants/pere/pere.component';
import { ListComponent } from './composants/list/list.component';
import { FormulaireBuilderComponent } from './composants/formulaire-builder/formulaire-builder.component';
import { ParentComponent } from './composants/parent/parent.component';
import { FatherComponent } from './composants/father/father.component';
import { PanierComponent } from './composants/panier/panier.component';
import { FirstComponent } from './composants/first/first.component';
import { SecondComponent } from './composants/second/second.component';
import { PersonneComponent } from './composants/personne/personne.component';
import { EditPersonneComponent } from './composants/edit-personne/edit-personne.component';
import { AuthComponent } from './composants/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { MenuComponent } from './composants/menu/menu.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';


const routes: Routes = [
  
  { path: 'login', component: AuthComponent },
{ path: 'inscription', component: InscriptionComponent },
  {
    path: '', canActivate: [AuthGuard], children: [
      {
        path: 'vehicule',
        loadChildren: () => import('./modules/vehicule/vehicule.module').then(m => m.VehiculeModule)
      },
      {path:'observable',component:ObservableComponent},
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'formulaireBuilder', component: FormulaireBuilderComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'tableau', component: TableauComponent },
  { path: 'form', component: FormComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'father', component: FatherComponent },
  { path: 'pere', component: PereComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'list', component: ListComponent },
  {path:'menu',component:MenuComponent},
  { path: 'personne', component: PersonneComponent },
  { path: 'editPersonne', component: EditPersonneComponent },
  { path: 'editPersonne/:id', component: EditPersonneComponent },
  
  { path: 'tableau/:param', component: TableauComponent },

    ]
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
