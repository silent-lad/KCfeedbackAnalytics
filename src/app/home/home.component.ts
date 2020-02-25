import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import M from 'materialize-css';
//import * as firebase from 'firebase/app';
import {FeedbackServiceService} from '../services/feedback-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private feedbackserviceService: FeedbackServiceService, private router: Router) { }
  ngOnInit() {this.getCoffeeOrders();}
  coffeeOrders;   getCoffeeOrders = () =>
        this.feedbackserviceService
        .getCustomerFeedback()
        .subscribe(res =>(this.coffeeOrders = res));

}
