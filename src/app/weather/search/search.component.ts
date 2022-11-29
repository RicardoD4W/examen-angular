import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../servicios/weatherservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private weatherSercice : WeatherserviceService) { }

  ngOnInit(): void {
  }

  buscar(texto : string){
    this.weatherSercice.peticion(texto);
  }



}
