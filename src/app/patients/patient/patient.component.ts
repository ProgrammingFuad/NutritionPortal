import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

}
