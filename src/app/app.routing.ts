import { Routes, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { SupersportFrontpageComponent } from './supersports/supersport-frontpage.component';
import { SupersportContactComponent } from './supersports/supersport-contact.component';
import { SupersportDetailProductComponent } from './supersports/supersport-detail-product.component';

const appRoutes: Routes = [
	{ path: '', component: SupersportFrontpageComponent},
	{ path: 'contact', component: SupersportContactComponent},
	{ path: 'product/:id', component: SupersportDetailProductComponent}
];

export const routing = RouterModule.forRoot(appRoutes);