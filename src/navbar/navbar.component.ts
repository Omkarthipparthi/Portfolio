import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private navbarService: NavbarService) {}
  

  public clickHamburger(): void {
    this.navbarService.clickHamburger();
  }

}
