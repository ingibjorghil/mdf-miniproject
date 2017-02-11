import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<supersport-header></supersport-header>
  	<supersport-frontpage></supersport-frontpage>
  	<supersport-footer></supersport-footer>
  	`,
})
export class AppComponent  { name = 'Angular'; }
