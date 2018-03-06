import { Component, ViewChild,ElementRef,OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  constructor() { }

  ngOnInit() {
    this.basicChart();
  }

  basicChart(){

    const element= this.el.nativeElement;

    const data=[{
      x: [1,2,3,4,5],
      y: [1,2,4,8,16]
    }]

    const layout ={
      title: 'title of graph',
      xaxis: {
        title: 'x-axis test1'
      },
      yaxis: {
        title: 'y-axis test1'
      }
    };

    Plotly.plot(element,data, layout);
    
  }

}
