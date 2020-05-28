import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  etat=false;
  quantite :number= 0;
  @Output() message = new EventEmitter();
  @Input() article: Article;
  constructor() { }

  ngOnInit(): void {
  }
  ajouter() {
    this.message.emit({ article: this.article, quantite: this.quantite});
    this.etat = true;
  }
}
