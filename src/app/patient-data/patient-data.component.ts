import { PatientDataAerobicService } from './patient-data-aerobic.service';
import { PatientDataFoodService } from './patient-data-food-intake.service';
import { PatientDataServceService } from './patient-data-servce.service';
import { PatientData } from './patient-data.model';
import { Component, ViewChild,ElementRef,OnInit} from '@angular/core';
import {PatientDataSleepService } from './patient-data-sleep.service';
import {PatientDataStressService} from './patient-data-stress.service';
import { MatButtonModule, MatToolbarModule, MatListModule,MatFormFieldControl,MatFormFieldModule, MatSelect,MatOptionModule,MatOption } from '@angular/material';


@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {
 
  patientX = [
    {value: 'FW1Qik9nE3ZLiC7Xk9fgBcabUwm1', viewValue: 'Demo'},
  ];


  @ViewChild('chart') el: ElementRef;

  sleep: SleepIntake[];
  food: foodIntake[];
  stress: StressLevel[];
  aerobic: Aerobic[];
   x1= [];
   y1=[];
  constructor(private patientDataServceService: PatientDataServceService, 
    private patientDataSleepService: PatientDataSleepService,
  private patientDataStressService:PatientDataStressService,
private PatientDataFoodService: PatientDataFoodService,
private patientDataAerobicService:PatientDataAerobicService  ) { 
 
  }
 
  ngOnInit() {
    var patientWeight = this.patientDataServceService.getData();
    var patientSleep= this.patientDataSleepService.getData();
    var patientStress= this.patientDataStressService.getData();
    var patientFood= this.PatientDataFoodService.getData();
    var patientAerobic= this.patientDataAerobicService.getData();


    patientAerobic.snapshotChanges().subscribe(item => {
      this.aerobic = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        this.aerobic.push(new Aerobic(y["AerobicType"],y["Caloriesburned"],
      y["Distance"],y["Duration"],y["TimeStamp"]));
    }
    );
    });



    patientStress.snapshotChanges().subscribe(item => {
      this.stress = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        this.stress.push(new StressLevel(y["TimeStamp"],y["Stress"]));
    }
    );
    });


    patientFood.snapshotChanges().subscribe(item => {
      this.food = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        this.food.push(new foodIntake(y["TimeStamp"], y["calories"],
      y["carbohyrates"],y["fat"],y["name"],y["protein"],y["type"]));
    }
    );
    });
    
    patientSleep.snapshotChanges().subscribe(item => {
      this.sleep = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        this.sleep.push(new SleepIntake(y["TimeStamp"],y["sleepValue"]));
    }
    );
    });



    patientWeight.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        var y = element.payload.toJSON();
        var date = y["UserDate"];
        var split = date.split(" ");
        this.x1.push(split[0]); 
        this.y1.push(y["UserWeight"])
      });
    });

    this.basicChart(this.x1,this.y1);
  }

  basicChart(x: string[], y: number[]){
    x=x.reverse();
    y=y.reverse();
    

    const element= this.el.nativeElement;

    const data=[{
      x ,
      y
    }]

    const layout ={
      title: 'Weight Tracker',
      xaxis: {
        title: 'Date Weight Recorded'
      },
      yaxis: {
        title: 'Weight in Kilos'
      }
    };

    Plotly.plot(element,data, layout);
    
  }

}
class Aerobic{
  timeStamp:string;
  aerobicType: string;
  caloriesBurned: string;
  distance: number;
  duration: number;
  realTimeStamp:string;

  constructor(aerobicType:string, caloriesBurned:string, distance:number, 
  duration:number, timeStamp:string){
    this.aerobicType=aerobicType;
    this.caloriesBurned=caloriesBurned;
    this.distance=distance;
    this.duration=duration;
    this.timeStamp=timeStamp;
    this.realTimeStamp=this.timeConverter(timeStamp);
  }


  timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time =  month + ' ' + date+ ' ' + year;
    return time;
  } 
}

class StressLevel{
  timeStamp:string;
  realTimeStamp: string;
  stressRating: number;
  
    constructor(timeStamp: string, stressRating:number){
      this.timeStamp=timeStamp;
      this.stressRating=stressRating;
      this.realTimeStamp= this.timeConverter(timeStamp);
    }
    timeConverter(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var time =  month + ' ' + date+ ' ' + year + ' ' + hour + ':' + min;
      return time;
    } 
  
  }


class SleepIntake{
timeStamp:string;
realTimeStamp: string;
sleepValue: number;

  constructor(timeStamp: string, sleepValue:number){
    this.timeStamp=timeStamp;
    this.sleepValue=sleepValue;
    this.realTimeStamp= this.timeConverter(timeStamp);
  }
  timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time =  month + ' ' + date+ ' ' + year + ' ' + hour + ':' + min;
    return time;
  } 

}


class foodIntake{
  timeStamp:string;
  calories:number;
  carbs:number;
  fat:number;
  mealName:string;
  protein:number;
  typeMeal:string;
  realTimeStamp: string;

  constructor(timeStamp: string, calories:number, carbs:number, 
              fat:number, name:string, protein: number,typeMeal:string){
                this.timeStamp=timeStamp;
                this.calories=calories;
                this.carbs=carbs;
                this.fat=fat;
                this.mealName=name;
                this.protein=protein;
                this.typeMeal=typeMeal;
                this.realTimeStamp=this.timeConverter(timeStamp);
  }

  timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time =  month + ' ' + date+ ' ' + year;
    return time;
  } 
}


