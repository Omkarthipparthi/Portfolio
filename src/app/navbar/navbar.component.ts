import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [ RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private navbarService: NavbarService) {}
  

  public clickHamburger(): void {
    this.navbarService.clickHamburger();
  }

}
