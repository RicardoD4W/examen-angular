import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherserviceService } from '../servicios/weatherservice.service';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.css']
})
export class InfoDetailsComponent implements OnInit {

  

  constructor(
    private weatherService : WeatherserviceService, 
    private activeRouting : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activeRouting.params.subscribe(( {nombre} )=>{
      this.weatherService.peticionDetails(nombre)
    })

    
  }


  

}
