import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavbarComponent, FooterComponent, RouterOutlet]
})
export class AppComponent {
  title = 'my-angular-portfolio-app';
}
