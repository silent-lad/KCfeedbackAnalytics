import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AgeGroupsComponent } from './agegroups/agegroups.component';
import { StateCityComponent } from './statecity/statecity.component';
import { ViewContainerComponent } from './view-container/view-container.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {path: 'pathSomewhere', component: HomeComponent, outlet: 'routerOutletName'}
    ]
  },
  {
    path: 'home',
    component: ViewContainerComponent,
    children:[
      {path: '', component: HomeComponent, outlet: 'viewOutlet'}
    ]
   
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'statecity',
    component: ViewContainerComponent,
    children:[
      {path: '', component: StateCityComponent, outlet: 'viewOutlet'}
    ]
  },
  {
    path: 'agegroups',
    component: ViewContainerComponent,
    children:[
      {path: '', component: AgeGroupsComponent, outlet: 'viewOutlet'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
