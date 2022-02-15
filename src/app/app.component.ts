import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-bs-primeNG';

  iconOpts: AnimationOptions = {
    path: '/assets/77378-sunset.json',
    autoplay: true,
    loop: true,
    initialSegment: [10, 88]
  };
}
