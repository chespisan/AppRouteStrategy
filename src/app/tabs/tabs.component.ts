import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
