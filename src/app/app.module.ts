import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule }   from '@angular/forms';
import {AuthserviceService} from './services/authservice.service';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ViewContainerComponent } from './view-container/view-container.component';
import {FeedbackServiceService} from './services/feedback-service.service';
import { StateCityComponent } from './statecity/statecity.component';
import { AgeGroupsComponent } from './agegroups/agegroups.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import{MatTableModule,MatFormFieldModule,MatInputModule,MatSortModule,MatDialogModule,MatButtonModule}from '@angular/material';
import {MatInputModule} from '@angular/material/input';

import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
	
//import { MaterialModule } from './@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
//import { MatTableDataSourceModule} from '@angular/material/tabledatasource';
import { DataTableComponent } from './DataTable/DataTable.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      NavBarComponent,
      SideBarComponent,
      ViewContainerComponent,
      StateCityComponent,
      AgeGroupsComponent,
      DataTableComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      MatTableModule,
      MatSortModule,
      MatDialogModule,
      MatButtonModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatInputModule,
      AngularFireModule.initializeApp(environment.firebaseConfig,
      ),
      AngularFirestoreModule,
      AngularFireAuthModule,
      BrowserAnimationsModule
   ],
   providers: [
      AuthserviceService,
      FeedbackServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
