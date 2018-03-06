import { Patient } from './../patients/shared/patient.model';
import { PatientListComponent } from './../patients/patient-list/patient-list.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-all-patients',
  templateUrl: './view-all-patients.component.html',
  styleUrls: ['./view-all-patients.component.scss']
})

export class ViewAllPatientsComponent implements OnInit {

mypatientList: Patient[];
 constructor(public allPatients: PatientListComponent){}
  ngOnInit() {
    this.mypatientList = this.allPatients.patientList;
    console.log(this.mypatientList);
  }

}
