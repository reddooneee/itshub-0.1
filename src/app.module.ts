import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';

@NgModule({
  declarations: [
  
  ],
  imports: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BrowserModule,
    
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ])
  ],
  providers: [],
})
export class AppModule { }