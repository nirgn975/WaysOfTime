import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'wot-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [],
  templateUrl: 'app/app.html',
})

@RouteConfig([
  { path: '/home',               component: HomeComponent,                name: 'Home', useAsDefault: true },
  { path: '/about',              component: AboutComponent,               name: 'About' },
])

export class App {

  constructor() {}

}
