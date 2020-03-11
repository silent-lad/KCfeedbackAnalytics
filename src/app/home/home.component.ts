import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import M from 'materialize-css';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private feedbackserviceService: FeedbackServiceService, private router: Router) { }
  //Create a function to contain your call and initialize it on the ngOnInit() to call it when the view is loaded for the first time. Create a coffeeOrders variable to map the returned results from your database via subscribe().
  // We will use this to iterate over and display home.component.html
  ngOnInit() {
    this.getCoffeeOrders(); this.getNumberofForm(); this.getAllPositiveDineAgain2(); this.getAllPositiveGreeted();this.getAllNegativeDineAgain2();
    this.getAllNegativeGreeted();  this.getAllExcellentQualityFood();  this.getAllPoorQualityFood(); this.getNumberofFormToday();
  }
  coffeeOrders;
  getCoffeeOrders = () =>
    this.feedbackserviceService
      .getCustomerFeedback()
      .subscribe(res => (this.coffeeOrders = res));
  /*Store the count of documents as a separate property and update that as you add/remove documents.*/
  /*An Observable doesn't have a promise-like method as then. In your service you are performing an http call which returns an Observable and you map this Observable to another Observable.*/

  numberForm: number = 0;
  getNumberofForm = () =>
    this.feedbackserviceService.getNumberofForms().subscribe(values => (this.numberForm = values.length));

    numberFormToday: number = 0;
    getNumberofFormToday = () =>
      this.feedbackserviceService.getTodayNumberofForms().subscribe(values => (this.numberFormToday = values.length));

  dineAgainPositive: number = 0;
  getAllPositiveDineAgain2 = () =>
    this.feedbackserviceService.getDineAgainPositiveCountAll2().subscribe(values => (this.dineAgainPositive = values.length));
   
   
   dineAgainNegative: number = 0;
    getAllNegativeDineAgain2 = () =>
      this.feedbackserviceService.getAllDineAgainNegative().subscribe(values => (this.dineAgainNegative = values.length));

  positiveGreeted: number = 0;
  getAllPositiveGreeted = () =>
    this.feedbackserviceService.getGraciouslyGreetedPositiveCountAll().subscribe(values => (this.positiveGreeted = values.length));


    negativeGreeted: number = 0;
    getAllNegativeGreeted = () =>
      this.feedbackserviceService.getGraciouslyGreetedNegativeCountAll().subscribe(values => (this.negativeGreeted = values.length));
  
      ExcellentQualityFood: number = 0;
      getAllExcellentQualityFood = () =>
        this.feedbackserviceService.getExcellentQualityCountAll().subscribe(values => (this.ExcellentQualityFood = values.length));
       
        PoorQualityFood: number = 0;
        getAllPoorQualityFood = () =>
          this.feedbackserviceService.getPoorQualityCountAll().subscribe(values => (this.PoorQualityFood = values.length));
  
  
}




