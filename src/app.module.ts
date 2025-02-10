import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';

@NgModule({
  declarations: [
  
  ],
  imports: [
    AppRoutingModule,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BrowserModule,
    
    RouterModule.forRoot([
      { path: '', component: NavbarComponent },
      { path: 'about', component: AboutComponent },
      { path: 'home', component: HomeComponent },
      { path: 'navbar', component: NavbarComponent }
    ])
  ],
  providers: [],
})
export class AppModule { }