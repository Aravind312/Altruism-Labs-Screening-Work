import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  chart;
  chart2 = [];
  pie: any;
  doughnut: any;
  constructor(private http:HttpClient,private router: Router) { }
  myData;
  labels12;
  data12;
  re=[];
  re8=[];
  re12=[];
  fft;
  ifft;
  phasors;
  ngOnInit() { 
    this.http.get("http://localhost:3000/details").subscribe(
      res => {
        //console.log(res);
       
        localStorage.setItem("jvn", JSON.stringify(res));
        this.myData = JSON.parse(localStorage.getItem("jvn"));
        console.log(res);

        for(var i in this.myData)
        this.re.push([this.myData[i].data]);

        this.data12 = this.myData.map(function(item) {
        return item.data;
        });

        this.labels12 = this.myData.map(function(item) {
        return item.timestamp;
        });

        for(var i in this.myData)
        this.re8.push([this.myData[i].timestamp]);

        console.log(this.labels12);

      
      /* this.labels12 = this.myData.jsonarray.map(function(e) {
          return e.data;
       });  
       this.data12 = this.myData.jsonarray.map(function(e) {
        return e.timestamps;
     });*/
     this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels:this.labels12,
        datasets: [
          {
            label: 'My First dataset',
            data: this.data12,
            //backgroundColor: 'red',
            borderColor: 'blue',
            fill: false,
          },
        ]
      }
    });

  } 
  );
}
  
  
}
