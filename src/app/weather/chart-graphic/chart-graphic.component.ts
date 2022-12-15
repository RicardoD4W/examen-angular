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
  public options: any = {
    aspectRatio:2.5,
    tooltips: {
      // Disable the on-canvas tooltip
      enabled: true,

    }
    
    
  };

  fechas : string[] = [];
  temperaturas : string[] = [];
  



  ngOnInit(): void {



    this.createChart(  );

  }



  createChart(){    
    Chart.defaults.scales.linear.min = -10;
    Chart.defaults.scales.linear.max = 45;

    this.activeRouting.params.subscribe(( {nombre} )=>{
      this.weatherService.peticionDetails(nombre).subscribe((respose)=>{
        this.tiempo = respose;
        for(let i = 0; i< 8 ; i++){
          this.fechas.push(this.tiempo.list[i].dt_txt.toString().substring(10,16));
          this.temperaturas.push(((this.tiempo.list[i].main.temp -273)  ).toString());
          console.log(this.tiempo)
        }

        
        this.chart = new Chart("MyChart", {
          type: 'line', //this denotes tha type of chart
          data: {// values on X-Axis
            labels: [...this.fechas], 
             datasets: [
              {
                label: "Temperatura - ºC",
                data: [...this.temperaturas],
                backgroundColor: 'blue',
                pointRadius : 5 
              },
              {
                label: "Profit",
                data: ['542', '542', '536', '327', '17',
                       '0.00', '538', '541'],
                backgroundColor: 'limegreen'
              }  
            ]
          },
          options: this.options
          
        });
      })
    })
      

  }


}
