import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  imports: [CommonModule, AngularSvgIconModule, FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
