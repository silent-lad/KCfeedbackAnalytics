import { Component, OnInit } from '@angular/core';
  
import {  AfterViewInit, ViewChild } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { Router } from '@angular/router';

import { MatTableDataSource, MatSort, MatDialog,MatPaginator } from '@angular/material';
@Component({
  selector: 'app-DataTable',
  templateUrl: './DataTable.component.html',
  styleUrls: ['./DataTable.component.css']
})
export class DataTableComponent implements OnInit {

  displayedColumns = ['Name','LastName' /*'Email', 'State', 'City', 'MealPeriod','QualityofFood','FeedbackDate'*/];
  //dataSource: MatTableDataSource<any>;
  dataSource = new MatTableDataSource();
  members;
  @ViewChild(MatPaginator,{ static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private feedbackserviceService: FeedbackServiceService, private router: Router) { }

  ngOnInit() {
    return this.feedbackserviceService.getNumberofForms().subscribe(res => this.dataSource.data = res);
    //return this.FeedbackserviceService.getDocs().subscribe(res => this.dataSource.data = res);
  
  }
 /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
