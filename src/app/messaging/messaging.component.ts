import { PatientDataServceService } from './../patient-data/patient-data-servce.service';
import { MaterialModule } from './../material.module';
import { PatientService } from './../patients/shared/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './../patients/shared/patient.model';
import { PatientListComponent } from './../patients/patient-list/patient-list.component'; 
import { FormsModule} from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatListModule,MatFormFieldControl,MatFormFieldModule, MatSelect,MatOptionModule,MatOption } from '@angular/material';
import { messageService } from './messageService.service';




//var hmap: Map<String, String> = new Map<String, String>();


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})

export class MessagingComponent implements OnInit {
  pList: Patient[];
  constructor(public allPatients: PatientService,
     private messageservice: messageService){}
  ngOnInit() {
    var patients = this.allPatients.getData();
    patients.snapshotChanges().subscribe(item => {
      this.pList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        if(y["credentials"]!= undefined){
          y["email"]= y["credentials"].email;
          y["name"]= y["credentials"].name;
          y["profilePicLink"]= y["credentials"].profilePicLink;
          this.pList.push(y as Patient);
        }
      });   
    });

/*
    for (var patient in this.pList) { 
      hmap.set(patient["$key"], patient);
   }
*/
  }

  onChange(patient: string){
    return patient;
  }

  onClickMe(){
    var patientName = (<HTMLInputElement>document.getElementById('name')).value;
    var patientMessage = (<HTMLInputElement>document.getElementById('patientMessage')).value;

    if(patientMessage!=undefined){
      console.log(patientMessage);
    }
    console.log("Message sent");
    let d = new Date();
    const unixTime = d.valueOf();
    console.log(patientMessage);
    this.messageservice.sendMessage(patientMessage,unixTime, "text");
  }

}


