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
  selector: 'app-AgeGroups',
  templateUrl: './AgeGroups.component.html',
  styleUrls: ['./AgeGroups.component.css']
})
export class AgeGroupsComponent implements OnInit {

  constructor(private feedbackserviceService: FeedbackServiceService, private router: Router) { }

  ngOnInit() {
    this.getAgeGroup34();
  }
  AgeGroup1;
  getAgeGroup34 = () =>
    this.feedbackserviceService.getAgeGroup().subscribe(snap => {
      snap.forEach(doc => {
//do a count that shows age group 34-bellow in since January to April or May

var count:number = 0;
         console.log(doc.id, ' => ', doc.data());


      });
    });
}
