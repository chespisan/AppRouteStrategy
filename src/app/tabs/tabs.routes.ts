import {NgModule} from '@angular/core';

import { CartComponent } from './../cart/cart.component';
import { StoreComponent } from './../store/store.component';
import { TabsComponent } from './tabs.component';
import { DiscoverComponent } from './../discover/discover.component';
import {Routes, RouterModule} from '@angular/router';

const tabsRoutes: Routes = [
  { path: 'discover', component: DiscoverComponent },
  { path: 'cart', component: CartComponent },
  { path: 'store', component: StoreComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

// const tabsRoutes: Routes = [
//   {
//     path: '',
//     component: TabsComponent,
//     children: [
//       { path: 'discover', component: DiscoverComponent },
//       { path: 'cart', component: CartComponent },
//       { path: 'store', component: StoreComponent },
//       { path: '', redirectTo: '/discover', pathMatch: 'full' },
//     ]
//   }
// ];

export const tabsRouter = RouterModule.forChild(tabsRoutes);
