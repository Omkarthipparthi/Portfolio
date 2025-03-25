import { Component } from '@angular/core';
import { Experience } from '../models/Experience';
import { Languages } from '../enums/ELanguage';
import { Education } from '../models/Education';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  public experiences: Experience[] = [
    new Experience(
      [
        Languages.Angular,
        Languages.TypeScript,
        Languages.Cypress,
        Languages.SpringBoot,
        Languages.Java,
        Languages.Docker,
        Languages.Git,
      ],
      'May 2024',
      'Jul 2024',
      'Arizona State University, Tempe, USA',
      'Software Engineer',
      'Developed an AI-powered educational platform using GPT-4, Langchain, and FAISS. Implemented features like Subject Matter Expert system, Job Recommender, and adaptive Exam Prep Aide.'
    ),
    new Experience(
      [
        Languages.Angular,
        Languages.TypeScript,
        Languages.Cypress,
        Languages.SpringBoot,
        Languages.Java,
        Languages.Selenium,
      ],
      'Dec 2022',
      'Jul 2023',
      'OpenText, Hyderabad, India',
      'Software Engineer',
      'Optimized Angular UI interfaces and REST API interactions to reduce load times by 30%. Led migration projects for Angular and testing frameworks, improving scalability and testing efficiency.'
    ),
    new Experience(
      [
        Languages.Java,
        Languages.SpringBoot,
        Languages.Selenium,
        Languages.BurpSuite,
        Languages.Fortify,
      ],
      'Oct 2020',
      'Dec 2022',
      'OpenText, Hyderabad, India',
      'Associate Software Engineer',
      'Designed cross-database schema relationships for versioning and state management. Executed cloud migration projects and security assessments, enhancing application security by 50%.'
    ),
  ];

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
