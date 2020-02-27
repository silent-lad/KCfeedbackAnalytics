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
  ngOnInit() {
    this.getCoffeeOrders(); this.getNumberofForms();}
    coffeeOrders;  
      getCoffeeOrders = () =>
        this.feedbackserviceService
        .getCustomerFeedback()
        .subscribe(res =>(this.coffeeOrders = res));
      /*Store the count of documents as a separate property and update that as you add/remove documents.*/
      /*An Observable doesn't have a promise-like method as then. In your service you are performing an http call which returns an Observable and you map this Observable to another Observable.*/
    
      numberForms;
      getNumberofForms = ()=>
      this.feedbackserviceService.getNumberofForms()
  
    
      }

