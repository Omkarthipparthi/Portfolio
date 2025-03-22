import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  public clickHamburger(): void {
    console.log('clickHamburger');
  }
}
