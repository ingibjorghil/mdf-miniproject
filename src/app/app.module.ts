import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { SupersportHeaderComponent } from './supersports/supersport-header.component';
import { SupersportFooterComponent } from './supersports/supersport-footer.component';
import { SupersportFrontpageComponent } from './supersports/supersport-frontpage.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SupersportHeaderComponent, SupersportFooterComponent, SupersportFrontpageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
