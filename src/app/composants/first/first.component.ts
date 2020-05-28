import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

 

  msg: string;
  messages = [];
  subscription: Subscription;
  constructor(private messageService: MessageService) { }
  ngOnInit() { 
    this.subscription = this.messageService.accederMessageSecond().subscribe(
      msg => this.messages.push(msg)
    );
  }

  ajouterMessage() {
    this.messageService.envoyerMessageFirst(this.msg);
    this.msg = '';
  }

}
