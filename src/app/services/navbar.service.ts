import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  public clickHamburger(): void {
    console.log('clickHamburger');
  }

    /** This method set the menu with the width of the screen. */
  public setMenuWithWidth(): void{
    this.setProperties();
    const local: NavbarService = this;
    addEventListener('resize', function () {
        // if (window.innerWidth > 970){
        //   local.changeDivsDisplay([local.body, local.menu], ["block", "none"]);
        //   local.burger.classList.remove('is-active');
        // }
    });
  }

  
  /** This method applies the display given in parameter to a div.
   * @param div The div to change the display.
   * @param display The display to apply to the div.
   */
  public changeDivDisplay(div: HTMLDivElement, display: string): void {
    div.style.display = display;
  }

  /** This method applies the displays given in parameter to a list of div.
   * @param divs A table of divs to change the display.
   * @param displays A table of displays to apply to the divs.
   */
  public changeDivsDisplay(divs: HTMLDivElement[], displays: string[]): void {
    divs.forEach((div , index) => this.changeDivDisplay(div, displays[index]));
  }

  /** This method set the properties of the class. */
  private setProperties(): void{
    // this.menu = this.menu ? this.menu : document.querySelector('.burger-menu') as HTMLDivElement;
    // this.body = this.body ? this.body : document.querySelector('.maindiv') as HTMLDivElement;
    // this.burger = this.burger ? this.burger : document.querySelector('.hamburger') as HTMLDivElement;
    // this.footer = this.footer ? this.footer : document.querySelector("footer") as HTMLDivElement;
    // this.themeButton = this.themeButton ? this.themeButton : document.querySelector('.toggle-checkbox') as HTMLInputElement;
  }

  public clickMenuEvent(): void{
    const menu = document.querySelectorAll('.burger-menu a') as NodeListOf<HTMLAnchorElement>;
    menu.forEach((menuButton) => {
      menuButton.addEventListener('click', () => {
        this.clickHamburger();
      });
    });
  }




}
