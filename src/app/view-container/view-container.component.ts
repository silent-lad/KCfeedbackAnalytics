import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.css']
})

export class ViewContainerComponent implements OnInit {
content: string;
  constructor(
    private route: ActivatedRoute,
  ) { }

  //Query parameters in Angular allow for passing optional parameters across any route in the application.
  ngOnInit() {
    this.route.queryParams.subscribe( value =>{
      this.content = value.page;
    })

    console.log("initAdmin");
    window["admin"]();
    window["dashboard"]();
    window["initAdmin"]();
  }

}
