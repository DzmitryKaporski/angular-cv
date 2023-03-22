import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LINKS } from './main.data';
import { Links } from './main.interface';

@Component({
  selector: 'app-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  linksList: Links[] = LINKS;
}
