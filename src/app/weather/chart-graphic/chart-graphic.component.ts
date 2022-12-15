import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { Tiempo } from '../interfaces/tiempo.interface';
import { WeatherserviceService } from '../servicios/weatherservice.service';


@Component({
  selector: 'app-chart-graphic',
  templateUrl: './chart-graphic.component.html',
  styleUrls: ['./chart-graphic.component.css']
})
export class ChartGraphicComponent {


  constructor(
    private weatherService : WeatherserviceService, 
    private activeRouting : ActivatedRoute
    ) {
   }


  tiempo! : Tiempo;
  public chart: any;

  fechas : string[] = [];
  temperaturas : string[] = [];
  



  ngOnInit(): void {



    this.createChart(  );

  }



  createChart(){    
    this.activeRouting.params.subscribe(( {nombre} )=>{
      this.weatherService.peticionDetails(nombre).subscribe((respose)=>{
        this.tiempo = respose;
        for(let i = 0; i< 8 ; i++){
          this.fechas.push(this.tiempo.list[i].dt_txt.toString());
          this.temperaturas.push(this.tiempo.list[i].main.temp.toString());
          console.log(this.temperaturas)
        }
        this.chart = new Chart("MyChart", {
          type: 'line', //this denotes tha type of chart
          data: {// values on X-Axis
            labels: [...this.fechas], 
             datasets: [
              {
                label: "Sales",
                data: ['54.2', '542', '536', '327', '17',
                '0.00', '538', '541'],
                backgroundColor: 'blue'
              },
              {
                label: "Profit",
                data: ['542', '542', '536', '327', '17',
                       '0.00', '538', '541'],
                backgroundColor: 'limegreen'
              }  
            ]
          },
          options: {
            aspectRatio:2.5
          }
          
        });
      })
    })
      

  }


}
