import { COURSES, EDUCATION, LINKS } from './main.data';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Courses, Education, Links } from './main.interface';

@Component({
  selector: 'app-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  coursesList: Courses[] = COURSES;
  educationList: Education[] = EDUCATION;
  linksList: Links[] = LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
