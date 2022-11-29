import { Component, OnInit } from '@angular/core';
import { Tiempo } from '../interfaces/tiempo.interface';
import { WeatherserviceService } from '../servicios/weatherservice.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private weatherService : WeatherserviceService) { }

  ruta() : string{
    return 'http://openweathermap.org/img/wn/'+ this.busqueda.list[0].weather[0].icon +'@2x.png';
  } 


  ngOnInit(): void {
  }

  get busqueda() {
        return this.weatherService.getBusquedas();

  }

  get loading(){
    document.querySelector('.id')?.classList.remove('hidden');
    return this.weatherService.getState();
  }
}
