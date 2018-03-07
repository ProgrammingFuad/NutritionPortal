import { PatientData } from './patient-data.model';
import { PatientDataServceService } from './patient-data-servce.service';
import { Component, ViewChild,ElementRef,OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  patientList: PatientData[];
   x1= [];
   y1=[];
  constructor(private patientDataServceService: PatientDataServceService) { }

  ngOnInit() {
    var patients = this.patientDataServceService.getData();
    patients.snapshotChanges().subscribe(item => {
      this.patientList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        y["weight"]= y["kilogram"];
        y["timestamp"]= y["timestamp"];
        this.x1.push(y["timestamp"]);
        this.y1.push(y["kilogram"])
        console.log(y);
        this.patientList.push(y as PatientData);
      });
    });

    this.basicChart(this.x1,this.y1);
  }

  basicChart(x: string[], y: number[]){

    const element= this.el.nativeElement;

    const data=[{
      x ,
      y
    }]

    const layout ={
      title: 'Weight Tracker',
      xaxis: {
        title: 'Date'
      },
      yaxis: {
        title: 'Weight in Kilos'
      }
    };

    Plotly.plot(element,data, layout);
    
  }

}
