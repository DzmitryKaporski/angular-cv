import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { LOGOS } from './footer.data';
import { Logos } from './footer.interface';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date = new Date();
  logosList: Logos[] = LOGOS;

  constructor() { }

  ngOnInit(): void {
  }

}
