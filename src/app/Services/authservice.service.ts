import { Injectable } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { FormControl, FormGroup } from "@angular/forms";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user: User;
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
  return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password or email.');
      } if (errorCode === 'auth/user-not-found') {
        alert('An account with this email does not exist.');
      } 
      
      console.log(error);
    });
    
    this.router.navigate(['/home']);
  })
}
//SignOut method for logging out from the Angular/Firebase app
  SignOut() {
    return firebase.auth().signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
}
