import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

constructor( private firestore: AngularFirestore) { }
getCustomerFeedback() { 
  return this.firestore.collection("Form").snapshotChanges();
}
}
