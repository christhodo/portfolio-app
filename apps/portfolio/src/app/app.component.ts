import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/experiences', icon: 'view_list', title: 'Experiences' },
  ];

  constructor() {}
}
