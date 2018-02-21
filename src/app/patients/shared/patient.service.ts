import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Patient } from './patient.model';
@Injectable()
export class PatientService {
  //making this patient list available to other classes
  patientList: AngularFireList<any>;
  selectedEmployee: Patient = new Patient();
  
  constructor(private firebase :AngularFireDatabase ) { }
  //We are getting the data from FB database node - 'users'
  //This is a temporary thing because our patient data
  //has not been fully updated into the system yet
  getData(){
    this.patientList = this.firebase.list('Patient');
    return this.patientList;
  }
  
}
