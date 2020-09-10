import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm = {
    email: '',
    password : ''
  };

  ngOnInit() {
  }

  onClickSubmit(data){
    console.log(data);
    alert('Entered Email id :' + data.emailid);
  }

}
