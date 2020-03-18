import { Injectable } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { FormControl, FormGroup } from "@angular/forms";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { User } from  'firebase';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user: User;
  loginError: String;
constructor(public afAuth: AngularFireAuth, public  router:  Router){
  this.afAuth.authState.subscribe(user => {
    if (user){
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      localStorage.setItem('user', null);
    }
  })
}

form = new FormGroup({        
  email: new FormControl(''), 
  password: new FormControl(''),

})

//doLogin() function simply calls Firebase authentication method SignUserWithEmailAndPassword() using the data provided by the user
doLogin(data){
  loginError: String;

    
  return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(value => {
      alert('Nice, you are logged in as Ivis!');
      this.router.navigate(['/home']);
    })
    .catch(error => {
      var errorCode = error.code;
  var errorMessage = error.message;
      alert ('Something went wrong: Either password or email is incorrect');
      if (errorCode === 'auth/wrong-password') {
        error.message ='Wrong password or email.';
      }else if (errorCode === 'auth/user-not-found') {
        error.message ='An account with this email does not exist.';
      } 
    });
    /*.catch ((error) => { 
    
     
      // Handle Errors here.
    
      if (error.code === 'auth/wrong-password') {
        this.loginError ='Wrong password or email.';
      }else if (error.code === 'auth/user-not-found') {
        this.loginError ='An account with this email does not exist.';
      } 
      
      console.log(error.code)
    })

    
   
  })*/
  // this.router.navigate(['/home']);
})
}
//SignOut method for logging out from the Angular/Firebase app
  SignOut() {
    return firebase.auth().signOut().then(() => {
      alert('You have been logged out');
      this.router.navigate(['/login']);
    })
  }
}
