import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InfoDetailsComponent } from './info-details/info-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularTiltModule } from 'angular-tilt';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchComponent,
    ResultComponent,
    MainPageComponent,
    InfoDetailsComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,  
    AngularTiltModule,
    RouterModule
    // BrowserAnimationsModule
  ],
  exports : [
    SearchComponent,
    ResultComponent,
    MainPageComponent,
    InfoDetailsComponent
  ]
})
export class WeatherModule { }
