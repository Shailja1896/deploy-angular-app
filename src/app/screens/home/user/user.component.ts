import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/screens/home/home.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userdata: UserModel;

  @Input() set userData(data: UserModel) {
    this.userdata = data;
  }
  @Output() openPostEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  openPost() {
    debugger;
    this.openPostEvent.emit(this.userdata.id);
  }

}
