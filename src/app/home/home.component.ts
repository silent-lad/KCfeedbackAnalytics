import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import M from 'materialize-css';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import {FeedbackServiceService} from '../services/feedback-service.service';
import { Router } from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

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
    this.getCoffeeOrders(); this.getNumberofForm();}
    coffeeOrders;  
      getCoffeeOrders = () =>
        this.feedbackserviceService
        .getCustomerFeedback()
        .subscribe(res =>(this.coffeeOrders = res));
      /*Store the count of documents as a separate property and update that as you add/remove documents.*/
      /*An Observable doesn't have a promise-like method as then. In your service you are performing an http call which returns an Observable and you map this Observable to another Observable.*/
    
      numberForm;
      getNumberofForm = ()=>
      this.feedbackserviceService.getNumberofForms().subscribe( values => (values.length));
     // numberForms = this.feedbackserviceService.getNumberofForms().subscribe( values => (values.length));
  
    
      }

