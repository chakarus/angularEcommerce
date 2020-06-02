import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user:User={};
 
  
  constructor(private fb:FormBuilder,private userService:UserService,private route:Router) { }


  ngOnInit(): void {
    
  }
  ajouter(){
 
    this.userService.addUser(this.user).subscribe(res => {
      this.route.navigateByUrl('/login');
  });
}



}
