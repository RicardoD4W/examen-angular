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
  temperaturasMax : number[] = [];
  deg : number[] = [];
  gust : number[] = [];
  speed : number[] = [];
  



  ngOnInit(): void {



    this.createChart(  );
    this.createChart2(  );

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
          this.temperaturasMax.push(((this.tiempo.list[i].main.temp -273)  ));
          console.log(this.tiempo)
        }

        let MAX = Math.max(...this.temperaturasMax);
        let MIN = Math.min(...this.temperaturasMax);

        
        this.chart = new Chart("MyChart", {
          type: 'line', //this denotes tha type of chart
          data: {// values on X-Axis
            labels: [...this.fechas], 
             datasets: [
              {
                label: "Temperatura - ºC",
                data: [...this.temperaturas],
                backgroundColor: 'green',
                pointRadius : 5 ,
                borderColor : 'green'
              },
              {
                label: "Max",
                data: [MAX,MAX,MAX,MAX,MAX,MAX,MAX,MAX],
                backgroundColor: 'red',
                pointRadius : 3 ,
                borderDash : [2,2],
                borderColor : 'red'

              } ,
              {
                label: "Min",
                data: [MIN,MIN,MIN,MIN,MIN,MIN,MIN,MIN],
                backgroundColor: 'blue',
                pointRadius : 3,
                borderDash : [2,2],
                borderColor : 'blue'


              }  
            ]
          },
          options: this.options
          
        });
      })
    })
      

  }



  createChart2(){    
    Chart.defaults.scales.linear.min = -5;
    Chart.defaults.scales.linear.max = 25;

    this.activeRouting.params.subscribe(( {nombre} )=>{
      this.weatherService.peticionDetails(nombre).subscribe((respose)=>{
        this.tiempo = respose;
        for(let i = 0; i< 8 ; i++){
          this.speed.push(this.tiempo.list[i].wind.speed);
          this.gust.push((this.tiempo.list[i].wind.gust)/100);
          this.deg.push(this.tiempo.list[i].wind.deg);

        }
        
        this.chart = new Chart("MyChart2", {
          type: 'line', //this denotes tha type of chart
          data: {// values on X-Axis
            labels: [...this.fechas], 
             datasets: [
              {
                label: "Vel Viento",
                data: [...this.speed],
                backgroundColor: 'green',
              },
              {
                label: "Ráfaga",
                data: [...this.gust],
                backgroundColor: 'red',
              } ,
              {
                label: "Ángulo",
                data: [...this.deg],
                backgroundColor: 'blue',
              }  
            ]
          },
          options: this.options
          
        });
      })
    })
      

  }


}
