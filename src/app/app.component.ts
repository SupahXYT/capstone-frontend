import { Component } from '@angular/core';
import { isPortal } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPortal = isPortal
  title = 'Privacy Survey';
}
