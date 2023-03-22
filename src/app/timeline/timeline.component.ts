import { DATA } from './timeline.date';
import { ITimelineInterface } from './timeline.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  timelineList: ITimelineInterface[] = DATA;
}
