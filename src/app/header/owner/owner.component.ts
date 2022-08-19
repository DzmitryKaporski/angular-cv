import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
