import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
total:number=0;
nombre:number=0;
  articles: Array<Article> = [
    { id: 1, description: 'clavier',  prixUnitaire: 20 },
    { id: 2, description: 'souris', prixUnitaire: 10 },
    { id: 3, description: 'écran', prixUnitaire: 50 },
    { id: 4, description: 'clavier', prixUnitaire: 20 },
  ];
  constructor() { }

  ngOnInit(): void {
  }


  afficherTotal(objet) {
    this.nombre += objet.quantite;
    this.total += objet.article.prixUnitaire * objet.quantite;
  }
}


