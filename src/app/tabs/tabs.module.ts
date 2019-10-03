import { NgModule } from '@angular/core';

import { StoreComponent } from './../store/store.component';
import { CartComponent } from './../cart/cart.component';
import { DiscoverComponent } from './../discover/discover.component';
import { CommonModule } from '@angular/common';
import { tabsRouter } from './tabs.routes';

@NgModule({
  declarations: [
    DiscoverComponent,
    CartComponent,
    StoreComponent
  ],
  exports: [
    DiscoverComponent,
    CartComponent,
    StoreComponent
  ],
  imports: [
    tabsRouter,
    CommonModule
  ]
})

export class TabsModule {}
