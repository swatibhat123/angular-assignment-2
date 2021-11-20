import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: string = '';
  allowCreateUser: boolean = true;

  @ViewChild('name') inputName;

  constructor() { }

  ngOnInit(): void {
  }

  onType(){
    if(this.userName != '')
    this.allowCreateUser = true;
  }

  onCreateUser(){
    this.allowCreateUser = false;
    this.inputName.nativeElement.value = ' ';
  }


}
