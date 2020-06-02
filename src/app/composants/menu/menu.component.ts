import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   

  lienStagiaire = '';
  param1 = 'john';
  param2 = 'wick';

  constructor(private router:Router) {
    this.lienStagiaire = '/stagiaire/' + this.param1 + '/' + this.param2;
  }
  ngOnInit() {

  }
 
 
  
  
}
