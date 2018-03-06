import { PatientService } from './../patients/shared/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './../patients/shared/patient.model';
import { PatientListComponent } from './../patients/patient-list/patient-list.component';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {

  constructor(public allPatients: PatientService){}

  ngOnInit() {
   // console.log(this.allPatients.patientList);
  }

}
