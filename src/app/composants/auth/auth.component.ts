import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: User = {};
  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }


  ngOnInit(): void {
  }
// login(){
//   this.authService.login(this.user).subscribe(
//     (res) => {
//       if (res['token']) {
//         this.router.navigateByUrl('');
//         localStorage.setItem('token', res['token']);
//       }
//     }
//   );
// }
login() {
  this.authService.login(this.user).subscribe(
    (res) => {
      // tslint:disable-next-line:no-string-literal
      if (res['token']) {
        // tslint:disable-next-line:no-string-literal
        localStorage.setItem('token', res['token']);
        this.userService.getCurrentUser(this.user).subscribe(
          (user) => {
            localStorage.setItem('user', JSON.stringify(user[0]));
            this.router.navigateByUrl('');
          }
        );
      }
    }
  );
}
}
