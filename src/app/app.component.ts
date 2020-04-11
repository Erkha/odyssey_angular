import { Component } from '@angular/core';
import { MenuComponent} from './menu/menu.component';
import { ROUTES } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Jean Michel website !';
}
