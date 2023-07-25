import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/IComment';
import { IMoment } from 'src/app/interfaces/IMoment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moment-card',
  templateUrl: './moment-card.component.html',
  styleUrls: ['./moment-card.component.scss'],
})
export class MomentCardComponent {
  @Input() moments: IMoment[] = [];
  baseApiUrl = environment.baseApiUrl;

  ngOnInit(): void {
   
  }
}
