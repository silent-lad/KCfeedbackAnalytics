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



@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      NavBarComponent,
      SideBarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig,
      ),
      AngularFirestoreModule,
      AngularFireAuthModule,
      
   ],
   providers: [
      AuthserviceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
