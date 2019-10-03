import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListUsersComponent} from './list-users/list-users.component';
import {PhotosComponent} from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    component: TabsComponent,
    loadChildren: './tabs/tabs.module#TabsModule'
  },
  // {path: 'users', component: ListUsersComponent},
  // {path: 'users/:idUser/photos', component: PhotosComponent},
  {path: '**', redirectTo: 'tabs'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

export const routedComponents = [ListUsersComponent, PhotosComponent];
