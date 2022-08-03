import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    itle = 'menu';
    library:MenuItem[] = [{
      item: "Candy"
      },
      {
        item: "Pop"
      },
      {
        item: "Energy Drink"
      },
      {
        item: "Slushie"
    }
  ]
}
