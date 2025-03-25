import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { Languages } from '../enums/ELanguage';
import { Language } from '../models/Language';
import { LanguagesLevel } from '../enums/ELanguageLevel';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
})
export class WorkComponent implements OnInit {
  public projects: Project[] = [];
  public languages: Language[] = [];

  ngOnInit() {
    this.setProjects();
    this.setLanguages();
  }

  public setProjects() {
    const leet2git = new Project(
      1,
      'Leet2Git',
      'Developed a Chrome extension using Angular and TypeScript that detects code submissions on LeetCode and pushes them to a specified GitHub repository. Utilized Chrome APIs and GitHub REST API for seamless integration and automation.',
      [Languages.Angular, Languages.TypeScript],
      'https://github.com/Omkarthipparthi/L2G'
    );
    const taxiTrajectoryVisualization = new Project(
      2,
      'Visual Analytics of Taxi Trajectory Data',
      'Created interactive graphs using D3.js to visualize the most frequented roads in Chicago based on taxi trajectory data. Leveraged Google Maps API for geospatial data processing and visualization.',
      [Languages.JavaScript, Languages.D3JS],
      'https://github.com/Omkarthipparthi/TraViz'
    );
    const gradeDevils = new Project(
      3,
      'GradeDevils',
      'Designed an AI-powered grading platform during a hackathon using AWS Lambda, DynamoDB, S3, SageMaker, and Bedrock. Built a responsive React frontend and Express.js backend for real-time student feedback.',
      [Languages.ReactJS, Languages.ExpressJS, Languages.AWS],
      'https://github.com/Omkarthipparthi/GradeDevils'
    );

    this.projects.push(leet2git, taxiTrajectoryVisualization, gradeDevils);
  }

  public setLanguages() {
    const java = new Language(
      1,
      Languages.Java,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'Used extensively in backend development with Spring Boot and REST APIs.',
      LanguagesLevel.Advanced
    );
    const typeScript = new Language(
      2,
      Languages.TypeScript,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'Utilized in Angular projects for building UI components and Chrome extensions.',
      LanguagesLevel.Advanced
    );
    const python = new Language(
      3,
      Languages.Python,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Used for AI development projects including GPT-4 integrations and data processing.',
      LanguagesLevel.Advanced
    );
    const d3js = new Language(
      4,
      Languages.D3JS,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'Implemented for data visualization in geospatial projects.',
      LanguagesLevel.Intermediate
    );
    const reactJS = new Language(
      5,
      Languages.ReactJS,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Used for building responsive frontends in web applications.',
      LanguagesLevel.Intermediate
    );
    const aws = new Language(
      6,
      Languages.AWS,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg',
      'Leveraged for cloud-based solutions in serverless architecture projects.',
      LanguagesLevel.Intermediate
    );

    this.languages.push(java, typeScript, python, d3js, reactJS, aws);
  }
}
