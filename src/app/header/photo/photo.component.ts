import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  constructor() { }

}
