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
    if(this.busqueda.weather[0].icon.includes('n')){
      document.querySelector('.special')?.classList.remove('from-blue-300');
      document.querySelector('.special')?.classList.remove('shadow-blue-300');
      document.querySelector('.special')?.classList.add('from-orange-300');
      document.querySelector('.special')?.classList.add('shadow-orange-300');
    }
    return 'http://openweathermap.org/img/wn/'+ this.busqueda.weather[0].icon +'@2x.png';
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

  get error(){
    document.querySelector('.error')?.classList.remove('hidden');
    return this.weatherService.getStateError();
  }
}
