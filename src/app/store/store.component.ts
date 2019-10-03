import { Component, OnInit, OnDestroy } from '@angular/core';


import {Observable, Subject} from 'rxjs';
import {AppService} from '../services/app.service';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements  OnInit, OnDestroy {

  public userList: any[] = [];

  constructor(private router: Router,
    private appService: AppService) { }

    ngOnInit() {
      console.log('%c ngOnInit ListUsersComponent', 'background: #000; color: #fef160');
      this.getUsers();
    }

    ngOnDestroy() {
      console.log('%c ngOnDestroy ListUsersComponent', 'background: #000; color: #d91e18');
    }

    getUsers() {
      this.appService.listUsers(0).subscribe((res: any) => {
        this.userList = res.data;
        console.log('resss', this.userList);
      });
    }

}
