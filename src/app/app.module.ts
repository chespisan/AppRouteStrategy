import { TabsModule } from './tabs/tabs.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents} from './app.routing';
import { HttpClientModule} from '@angular/common/http';
import { FilterdataPipe } from './filterdata.pipe';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouteReuseStrategy} from '@angular/router';
import { CustomReuseStrategy} from './services/CustomReuseRoute';
import { TabsComponent } from './tabs/tabs.component';
import { StoreComponent } from './store/store.component';
import { DiscoverComponent } from './discover/discover.component';
import { CartComponent } from './cart/cart.component';
import { tabsRouter } from './tabs/tabs.routes';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    FilterdataPipe,
    TabsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide : RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
