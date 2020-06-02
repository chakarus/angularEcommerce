import { Component } from '@angular/core';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Personne } from './interfaces/personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){

  }
 
  title = 'reviAngular';
  tableau = [-5,10,0,18];
  personne={
    num:1,
    nom:"wick",
    prenom:'john',
  };
  nom="wick";
  personnes: Array<Personne> = [
    { nom: 'wick', prenom: 'john', id: 1 },
    { nom: 'wayne', prenom: 'alan', id: 2 },
    { nom: 'travolta', prenom: 'mike', id: 3 },
    { nom: 'dalton', prenom: 'jack', id: 4 },
  ];
  getToken() {
    // return localStorage.getItem('token') != null ? true : false;
    if(localStorage.getItem('token')  !=null ){
      return true;
    }else
     return false;

    }
  
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
