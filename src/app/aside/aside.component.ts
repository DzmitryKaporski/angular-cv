import { SKILLS, CONTACTS } from './aside.data';
import { Skills, Contacts } from './aside.interface';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  skillsList: Skills[] = SKILLS;
  contactsList: Contacts[] = CONTACTS;

  constructor() { }

  ngOnInit(): void {
  }

}
