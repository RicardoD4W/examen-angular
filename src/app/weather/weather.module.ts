import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InfoDetailsComponent } from './info-details/info-details.component';



@NgModule({
  declarations: [
    SearchComponent,
    ResultComponent,
    MainPageComponent,
    InfoDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SearchComponent,
    ResultComponent,
    MainPageComponent,
    InfoDetailsComponent
  ]
})
export class WeatherModule { }
