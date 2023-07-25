import { Component } from '@angular/core';
import { IComment } from 'src/app/interfaces/IComment';

import { IMoment } from 'src/app/interfaces/IMoment';

import { environment } from 'src/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MomentService } from 'src/app/services/moment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  allMoments: IMoment[] = [];
  moments: IMoment[] = [];

  baseApiUrl = environment.baseApiUrl;

  // TODO Search Moment

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.moments = [
      {
        id:1,
        title: 'Visit in England',
        comments: [{text:"Beatifull", username: "Ricardo Castle"}],
        created_at: '20/07/2023',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vero, sapiente distinctio. Facere ducimus expedita molestiae repellendus, sint magnam.',
        image: '/assets/bg/mo1.jpg',
      },
      {
        id:2,
        title: 'Visit Florest',
        comments: [{text:"Beatifull", username: "Ricardo Castle"}],
        created_at: '20/07/2023',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vero, sapiente distinctio. Facere ducimus expedita molestiae repellendus, sint magnam.',
        image: '/assets/bg/mo3.jpg',
      },
      {
        id:3,
        title: 'Visit Florida',
        comments: [{text:"Beatifull", username: "Ricardo Castle"}],
        created_at: '20/07/2023',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vero, sapiente distinctio. Facere ducimus expedita molestiae repellendus, sint magnam.',
        image: '/assets/bg/mo2.jpg',
      },
      {
        id:4,
        title: 'My Birthday',
        comments: [{text:"Beatifull", username: "Ricardo Castle"}],
        created_at: '20/07/2023',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vero, sapiente distinctio. Facere ducimus expedita molestiae repellendus, sint magnam.',
        image: '/assets/bg/mo3.jpg',
      },
    ];
  }
}
