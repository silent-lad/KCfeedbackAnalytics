import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private firestore: AngularFirestore) { }
  getCustomerFeedback() {
    return this.firestore.collection("Form").snapshotChanges();
  }


  getNumberofForms() {
    //Here, values is an array of all items in myCollection. You don't need metadata so you can use valueChanges() method directly.
    return this.firestore.collection("Form").valueChanges();//].subscribe( values => console.log(values.length));
    /*.get().subscribe(function(querySnapshot) {      
    querySnapshot.forEach(function(doc) {
      let total_count = 0;
       // doc.data() is never undefined for query doc snapshots
       console.log(doc.id, " => ", doc.data());
   });
   });
   */
  }
  getDineAgainPositive() {
    // Create a reference to the cities collection
    var YesDineAgainRef = this.firestore.collection("Form")
  
    // Create a query against the collection.
    var query = YesDineAgainRef => YesDineAgainRef.where("DineWithUsAgainPositive", "==", true).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    
  }

}
