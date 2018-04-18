import { TimelineComponent } from './app/timeline/timeline.component';
import { PatientDataComponent } from './app/patient-data/patient-data.component';
import { Component } from '@angular/core';
import { PatientListComponent } from './app/patients/patient-list/patient-list.component';
import { MessagingComponent } from './app/messaging/messaging.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { NewHomeComponent } from './app/new-home/new-home.component';


export const appRoutes: Routes = [
    { path: 'login',   component: LoginComponent},
    { path: 'home',   component: NewHomeComponent},
    {path: 'newsFeed', component: TimelineComponent},
    { path: 'patientlist',  component: PatientListComponent},
    { path: 'patientdata', component: PatientDataComponent},
    { path: 'messaging',   component: MessagingComponent} 
  ];