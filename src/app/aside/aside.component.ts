import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SKILLS, CONTACTS, LANGUAGES } from './aside.data';
import { Skills, Contacts, Languages } from './aside.interface';

@Component({
  selector: 'app-aside',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  skillsList: Skills[] = SKILLS;
  contactsList: Contacts[] = CONTACTS;
  languageList: Languages[] = LANGUAGES;

  constructor() { }

  ngOnInit(): void {
  }

}
