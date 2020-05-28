import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-fils',
  templateUrl: './parent-fils.component.html',
  styleUrls: ['./parent-fils.component.css']
})
export class ParentFilsComponent implements OnInit {

  @Input() nom: string;
  // tslint:disable-next-line:no-output-native
  @Output() message = new EventEmitter<number>();
  note: number;
  buttonStatus = false;

  constructor() { }

  ngOnInit() { }
  send() {
    this.message.emit(this.note);
    this.buttonStatus = true;
  }

}
