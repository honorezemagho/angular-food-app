import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
title = 'Angular 4 Projects';
todaydate;
componentproperty;
emailid;
formdata;

  constructor() { }

ngOnInit(): void {
  this.formdata = new FormGroup ({
    emailid: new FormControl("", Validators.compose ([
      Validators.required,
      Validators.pattern("^ @]*@[^ @]*")
    ])),
    passwd: new FormControl("", this.passwordvalidation)
  });
}
passwordvalidation(formcontrol) {
  if (formcontrol.value.length < 5) {
    return {"passwd" : true};
  }
}
onClickSubmit(data) {this.emailid = data.emailid;}


}
