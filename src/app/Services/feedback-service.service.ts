import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'firebase/firestore';


import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

export interface Item {GraciouslyGreetedPositive: boolean;
  Name: string;}
@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  form: Observable<Item[]>;
  constructor(private firestore: AngularFirestore) { }
  
  
  getCustomerFeedback() {
    return this.firestore.collection("Form").snapshotChanges();
  }
  getNumberofForms() {
    //Here, values is an array of all items in myCollection. You don't need metadata so you can use valueChanges() method directly.
    return this.firestore.collection("Form").valueChanges();//subscribe( values => console.log(values.length));
    /*.get().subscribe(function(querySnapshot) {      
    querySnapshot.forEach(function(doc) {
      let total_count = 0;
       // doc.data() is never undefined for query doc snapshots
       console.log(doc.id, " => ", doc.data());
   });
   });
   */
  }
  getDineAgainPositiveCountAll2() {
    // Create a reference to the cities collection
    return this.firestore.collection("Form", ref => ref.where("DineWithUsAgainPositive", "==", true)).snapshotChanges();//
  }

  getGraciouslyGreetedPositiveCountAll() {
    // Create a reference to the cities collection
    return this.firestore.collection("Form", ref => ref.where("GraciouslyGreetedPositive", "==", true)).valueChanges();//

  }

  getAllDineAgainNegative() {
    return this.firestore.collection("Form", ref => ref.where("DineWithUsAgainNegative", "==", true)).snapshotChanges();
  }
  
  getGraciouslyGreetedNegativeCountAll(){
    return this.firestore.collection("Form", ref => ref.where("GraciouslyGreetedNegative", "==", true)).valueChanges();
  }
  getExcellentQualityCountAll(){
    return this.firestore.collection("Form", ref => ref.where("QualityofFood", "==", "Excellent")).snapshotChanges();
  }
  getPoorQualityCountAll(){
    return this.firestore.collection("Form", ref => ref.where("QualityofFood", "==", "Poor")).valueChanges();
  }

  getTodayNumberofForms(){
 return this.firestore.collection("Form", ref => ref.where("FeedbackDate", ">=", new Date("2020-05-07 00:00"))).valueChanges();
 //"3/10/2020"
 //.where("publishedAt", ">=", new Date("2018-01-01 00:00"))
  // .orderBy("timestamp", "desc")
  //new DateTime.now())
  //return this.firestore.collection("Form", ref => ref.orderBy("timestamp", "desc")).snapshotChanges();
  }
   GetPositiveGreetingToday(){
    //return this.firestore.collection("Form", ref => 
      // return this.firestore.collection("Form", ref => ref.where("GraciouslyGreetedPositive", "==", true)).("Form", ref => ref.where("FeedbackDate", ">=", new Date("2020-05-07 00:00"))).valueChanges();
    //return firebase.firestore().collection("Form").where("GraciouslyGreetedPositive","==", true).where("FeedbackDate", "==", new Date("2020-05-07 00:00")).get();
  

    //can do this
    this.itemsCollection = this.firestore.collection<Item>("Form", ref => ref.where("GraciouslyGreetedPositive", "==", 
true).where("Name", "==", "Steven"))
return this.form = this.itemsCollection.valueChanges();
   
  }
/*
    .where("age", "<=", 30)
    .where("age", ">=", 20)
    .get()
    .then(snap => {
        snap.forEach(doc => {
            console.log(doc.data());
        });
    });*/



   // Get all the user's comments, no matter how deeply nested
   // this.comments$ = afs.collectionGroup('Comments', ref => ref.where('user', '==', userId))
//.valueChanges({ idField });
    //citiesRef.where("state", "==", "CO").where("name", "==", "Denver");
//citiesRef.where("state", "==", "CA").where("population", "<", 1000000);

//
    //firebase.firestore().collection('reservations').where('dateTime', '>=', new Date()).get()
  }

    // Create a reference to the cities collection
    //afs.collection('items', ref => ref.where('size', '==', 'large'))
    //return this.firestore.collection("Form", ref => ref.where("AgeGroup", "==", "34-Below")).get();
 

    //.where("AgeGroup", ">=", new Date("2020-01-01 00:00"))
    //.where("AgeGroup", "<=", new Date("2020-01-31 23:59"))

    // just one field select("AgeGroup")

  
