import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { SupersportHeaderComponent } from './supersports/supersport-header.component';
import { SupersportFooterComponent } from './supersports/supersport-footer.component';
import { SupersportFrontpageComponent } from './supersports/supersport-frontpage.component';
import { SupersportContactComponent } from './supersports/supersport-contact.component';
import { SupersportDetailProductComponent } from './supersports/supersport-detail-product.component';
import { StarRatingComponent } from './supersports/star-rating.component';
import { ProductItemComponent } from './products/product-item.component';
import { SupersportService } from './shared/supersport.service';
import { PopularProductPipe } from './products/popularproduct.pipe';
import { routing } from './app.routing';

@NgModule({
  imports: [ 
  	BrowserModule, 
  	FormsModule,
    ReactiveFormsModule,
  	routing
  ],
  declarations: [ 
  	AppComponent, 
    StarRatingComponent,
  	SupersportHeaderComponent, 
  	SupersportFooterComponent, 
  	SupersportFrontpageComponent,
    SupersportContactComponent,
    SupersportDetailProductComponent,
    ProductItemComponent,
    PopularProductPipe,
  ],
  providers: [
    Title,
    SupersportService
   ],
  bootstrap: [ 
  	AppComponent 
  ]
})
export class AppModule { }
