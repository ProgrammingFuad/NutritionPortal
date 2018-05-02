import { messageService } from './messaging/messageService.service';
import { PatientDataAerobicService } from './patient-data/patient-data-aerobic.service';
import { PatientDataServceService } from './patient-data/patient-data-servce.service';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { PatientService } from './patients/shared/patient.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NewHomeComponent } from './new-home/new-home.component';
import { LoginComponent } from './login/login.component';
import { MessagingComponent } from './messaging/messaging.component';
import { appRoutes } from '../routes';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MessageComponent } from './messaging/message/message.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { MatSelectModule } from '@angular/material/select';
import { TimelineComponent } from './timeline/timeline.component';
import { PatientDataSleepService } from './patient-data/patient-data-sleep.service';
import { PatientDataStressService } from './patient-data/patient-data-stress.service';
import {PatientDataFoodService} from './patient-data/patient-data-food-intake.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    NewHomeComponent,
    LoginComponent,
    MessagingComponent,
    MessageComponent,
    FormSubmitComponent,
    PatientDataComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [HttpModule,HttpClientModule,PatientService, PatientDataServceService,
    PatientDataSleepService,PatientDataStressService,
    PatientDataFoodService,PatientDataAerobicService,messageService,PatientListComponent],
  bootstrap: [AppComponent]
})
export class AppModule{
   ngOnInit() {
   
  }

 }
