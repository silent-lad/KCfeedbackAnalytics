import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule }   from '@angular/forms';
import {AuthserviceService} from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError : string;
  constructor(private AuthserviceService: AuthserviceService, private router: Router) { }
  ngOnInit() {
  }

  

  OnSubmit(){
    let data = this.AuthserviceService.form.value
    if (data['email'] == ''){
      alert('Please enter your email');
      return;
    }
    if (data['password'] == ''){
      alert('Please enter your password');
      return;
    }
    this.AuthserviceService.doLogin(data)
    .then(res => {
      console.log(res);
      alert("Signed in!!!");
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
      alert("Saved Error!!!");
    })
  }
}