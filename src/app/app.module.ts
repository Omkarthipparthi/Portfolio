import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [ 
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      AppComponent,
      NavbarComponent,
      FooterComponent, 
      HomeComponent,
      AboutComponent,
    ],
    bootstrap: [],
  })

  export class AppModule { }