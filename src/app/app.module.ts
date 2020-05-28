import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './composants/observable/observable.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { MenuComponent } from './composants/menu/menu.component';
import { TableauComponent } from './composants/tableau/tableau.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { FormComponent } from './composants/form/form.component';
import { PereComponent } from './composants/pere/pere.component';
import { FilsComponent } from './composants/fils/fils.component';
import { ItemComponent } from './composants/item/item.component';
import { ListComponent } from './composants/list/list.component';
import { FormulaireBuilderComponent } from './composants/formulaire-builder/formulaire-builder.component';
import { ParentComponent } from './composants/parent/parent.component';
import { ParentFilsComponent } from './composants/parent-fils/parent-fils.component';
import { Formulaire3Component } from './composants/formulaire3/formulaire3.component';
import { FatherComponent } from './composants/father/father.component';
import { SonComponent } from './composants/son/son.component';
import { PanierComponent } from './composants/panier/panier.component';
import { ArticleComponent } from './composants/article/article.component';
import { FirstComponent } from './composants/first/first.component';
import { SecondComponent } from './composants/second/second.component';
import { ParrainComponent } from './composants/parrain/parrain.component';
import { PersonneComponent } from './composants/personne/personne.component';
import { EditPersonneComponent } from './composants/edit-personne/edit-personne.component';

@NgModule({
  declarations: [
    AppComponent,
   
    MenuComponent,
    ObservableComponent,
    AdresseComponent,
    StagiaireComponent,
    TableauComponent,
    FormulaireComponent,
    FormComponent,
    PereComponent,
    FilsComponent,
    ItemComponent,
    ListComponent,
    FormulaireBuilderComponent,
    ParentComponent,
    ParentFilsComponent,
    Formulaire3Component,
    FatherComponent,
    SonComponent,
    PanierComponent,
    ArticleComponent,
    FirstComponent,
    SecondComponent,
    ParrainComponent,
    PersonneComponent,
    EditPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
