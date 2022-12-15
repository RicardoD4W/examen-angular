import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { InfoDetailsComponent } from './weather/info-details/info-details.component';
import { MainPageComponent } from './weather/main-page/main-page.component';

const routes: Routes = [
  {path : '' , component: MainPageComponent},
  {path : 'info-details', component : InfoDetailsComponent},
  {path : 'info-details/:nombre', component : InfoDetailsComponent},
  {path : '404', component : ErrorComponent},
  {path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
