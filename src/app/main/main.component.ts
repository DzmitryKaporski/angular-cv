import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EDUCATION, LINKS } from './main.data';
import { Education, Links } from './main.interface';

@Component({
  selector: 'app-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  educationList: Education[] = EDUCATION;
  linksList: Links[] = LINKS;
}
