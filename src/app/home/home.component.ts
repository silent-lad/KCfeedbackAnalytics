import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import M from 'materialize-css';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Chart } from 'chart.js';


import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator } from '@angular/material';
import * as firebase from 'firebase/app';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


export interface Item {
  GraciouslyGreetedPositive: boolean;
  Name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  Test : any;
  
   labelsArray = [];
dataArray = [];
  chart = []; 
  arraytoPassChart = []
  
    @ViewChild('valueBarsCanvas', {static: false}) valueBarsCanvas;
    valueBarsChart: any;
    barChart: any;
  chartData = null;

 

  //chart = []; // This will hold our chart info
  displayedColumns = ['Name', 'LastName', 'State', 'City', 'MealPeriod', 'MainCourse', 'QualityofFood'];
  dataSource = new MatTableDataSource();


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(private feedbackserviceService: FeedbackServiceService, private router: Router, private firestore: AngularFirestore) { }
  //Create a function to contain your call and initialize it on the ngOnInit() to call it when the view is loaded for the first time. Create a coffeeOrders variable to map the returned results from your database via subscribe().
  // We will use this to iterate over and display home.component.html
  ngOnInit() {

    this.getNumberofForm(); this.getAllPositiveDineAgain2(); this.getAllPositiveGreeted(); this.getAllNegativeDineAgain2();
    this.getAllNegativeGreeted(); this.getAllExcellentQualityFood(); this.getAllPoorQualityFood(); this.getNumberofFormToday();
    this.getGreetingPositivebyToday();
    console.log(this.positiveGreeted)
    return this.feedbackserviceService.getNumberofForms().subscribe(res => this.dataSource.data = res);

   
  }


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['As Expected', 'Higher than Expected', 'Lower than Expected'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.dataArray, label: 'Best Fruits' }
  ];



  ionViewDidLoad() {
    // Reference to our Firebase List
    return this.firestore.collection("Form").get().subscribe((snapshot) => {
      snapshot.docs.forEach(doc => {
          var item = doc.data();
  
          var price = item.prices;
          this.dataArray.push(price);
  
       
      });

      this.barChart = new Chart(this.valueBarsCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: this.labelsArray,
            datasets: [
                {



                  
                    label: "Score Comparision",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                   data: this.dataArray,
                    spanGaps: false,
                }
            ]
        }
  
    });
  });



   
  /*this.dashApis.GetAthleteScoreByTest(ACCESS_TOKEN)
  .subscribe(
      (response) => {
          this.GetAthleteScoreByTest = response["data"];
          let labels = ['0'];
          let data = [0];
          let i = 1;
          this.GetAthleteScoreByTest.forEach(element => {
              data.push(element["AthleteScore"]);
              labels.push(i.toString());
              ++i;
          });*/
  
  }

  



  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  GetPositiveGreetingToday2() {
    //return this.firestore.collection("Form", ref => 
    // return this.firestore.collection("Form", ref => ref.where("GraciouslyGreetedPositive", "==", true)).("Form", ref => ref.where("FeedbackDate", ">=", new Date("2020-05-07 00:00"))).valueChanges();
    //return firebase.firestore().collection("Form").where("GraciouslyGreetedPositive","==", true).where("FeedbackDate", "==", new Date("2020-05-07 00:00")).get();


    //can do this
    this.itemsCollection = this.firestore.collection<Item>("Form", ref => ref.where("GraciouslyGreetedPositive", "==",
      true).where("Name", "==", "Steven"))
    return this.items = this.itemsCollection.valueChanges();

  }

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
  //Getting values by todays date


  GreetingPOToday;
  getGreetingPositivebyToday = () =>
    this.feedbackserviceService.GetPositiveGreetingToday().then(values => (this.GreetingPOToday = values.length));
  //var GreetingPOToday =  querySnapshot.size ();


  // check and do something with the data here.
  // get the data of all the documents into an array
  /*querySnapshot.docs.map(function (documentSnapshot) {
    return documentSnapshot.data();
  });*/



}




