import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { NavbarComponent } from './app/navbar/navbar.component';

const routes: Routes = [
    { path: 'navbar', component: NavbarComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ]}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }