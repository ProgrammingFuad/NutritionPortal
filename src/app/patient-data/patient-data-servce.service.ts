import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { PatientData } from './patient-data.model';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Injectable()
export class PatientDataServceService {
  //making this patient list available to other classes
  patientWeightData: AngularFireList<any>;
  selectedEmployee: PatientData = new PatientData();
  
  constructor(private firebase :AngularFireDatabase ) { }
  //We are getting the data from FB database node - 'users'
  //This is a temporary thing because our patient data
  //has not been fully updated into the system yet
  getData(){
    this.patientWeightData = this.firebase.list('weight');
    return this.patientWeightData;
  }

}
