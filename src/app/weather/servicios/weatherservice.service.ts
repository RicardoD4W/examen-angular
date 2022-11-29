import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tiempo } from '../interfaces/tiempo.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private HttpClinet : HttpClient, private Router : Router) { }

  private API_KEY : string = 'c50753471a70495326473300eecc3c5b';
  busquedasRealizadas! : Tiempo;


  getBusquedas(){
    return this.busquedasRealizadas;
  }


  peticion(busqueda : string , lang : string = 'es'){
    this.HttpClinet.get(`https://api.openweathermap.org/data/2.5/forecast?q=${busqueda}&appid=${this.API_KEY}&lang=${lang}`)
      .subscribe((resolve : any) =>{
          this.busquedasRealizadas = resolve;
          console.log(resolve);
      },
      (reject =>{
        console.log('error');
        this.Router.navigate(['/404']);
      }))
  }






}
