import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';




@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }

}
