import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private Router : Router) { }

  ngOnInit(): void {
  }

  volver(){
    this.Router.navigate(['']);
  }

}
