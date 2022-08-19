import { SOCIALS } from './footer.data';
import { Socials } from './footer.interface';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date = new Date();
  socialsList: Socials[] = SOCIALS;

  constructor() { }

  ngOnInit(): void {
  }

}
