import { Component } from '@angular/core';
import { Education } from '../models/Education';
import { Experience } from '../models/Experience';
import { Language } from '../models/Language';
import { Languages } from '../enums/ELanguage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  public location: string = 'Your Location Here';
  public email: string = 'your.email@example.com';
  public phone: string = '(123) 456-7890';
  
  public educations: Education[] = [
    new Education(
      'Aug 2023',
      'May 2025',
      'Arizona State University, Tempe, USA',
      "Bachelor's Degree in Computer Science",
      ''
    ),
    new Education(
      'Aug 2017',
      'May 2021',
      'Jawaharlal Nehru Technological University, Hyderabad, India',
      "College Code: KMIT",
      ''
    ),
  ];
}
