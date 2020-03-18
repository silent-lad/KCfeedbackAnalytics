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

  //Clear method that clears form and resets it after the form is submitted
clearForm(){
  console.log("Clear");

  $('form').trigger("reset");
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
    }else{
    
    
    this.AuthserviceService.doLogin(data)
    .then(res => {
      //alert("Signed in!!!");
      this.router.navigate(['/home']);
     
    });
    //Data is passed to firebase and form is cleared and reset     
    this.clearForm();
   }
}
}
