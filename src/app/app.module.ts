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
import { ViewAllPatientsComponent } from './view-all-patients/view-all-patients.component';
import { appRoutes } from '../routes';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MessageComponent } from './messaging/message/message.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    NewHomeComponent,
    LoginComponent,
    MessagingComponent,
    ViewAllPatientsComponent,
    MessageComponent,
    FormSubmitComponent
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
    HttpClientModule
  ],
  providers: [HttpModule,HttpClientModule,PatientService],
  bootstrap: [AppComponent]
})
export class AppModule{
   ngOnInit() {
   
  }

 }
