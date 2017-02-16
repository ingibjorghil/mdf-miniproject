import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<supersport-header></supersport-header>
  	<router-outlet></router-outlet>
  	<supersport-footer></supersport-footer>
  	`,
})

export class AppComponent  { name = 'Angular'; }
