import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

constructor( private firestore: AngularFirestore) { }
getCustomerFeedback() { 
  return this.firestore.collection("Form").snapshotChanges();
}

getNumberofForms(){
 return this.firestore.collection("Forms").get().subscribe(function(querySnapshot) {      
  console.log(querySnapshot.docs.length); 
  console.log("i AM BEING DISPLAYED");
});

}

}
