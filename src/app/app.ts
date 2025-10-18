import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Header, AppRoutingModule, Footer],
})
export class App {
  title = 'forms-reativos';
}
