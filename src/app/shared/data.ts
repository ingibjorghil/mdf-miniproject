import {SportStores} from '../supersports/supersport';
import { Products } from '../products/products.interface';

export const STOREDATA:SportStores[] = [{
		id: 1,
		address: 'Vinegade 109',
		city: '5000 Odense',
		phone: 99886622
	}, {
		id: 2,
		address: 'Vestergade 910',
		city: '9000 Aalborg',
		phone: 96819191
	}];

export const PRODUCTITEMS:Products[] = [{
		id: 1,
		name: '1 GEL-FUJITRABUCO 5 G-TX',
		imgthumb: 'assets/img/shoe.png',
		category: 'Running shoe',
		brandlogo: 'assets/img/brand_logo.jpg',
		shortdescription: 'God og robust terrænløbesko med GORE-TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod.',
		longdescription: 'Tab - 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, elit vitae porttitor facilisis, urna nunc sollicitudin nibh, eu sodales metus nisi a orci. Cras posuere, mauris sit amet congue commodo, ex mauris auctor massa, at tincidunt massa quam eget mauris. Suspendisse quis dignissim lacus. Duis vitae ante non diam porttitor porttitor nec non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ac risus cursus lectus fermentum consectetur. In hac habitasse platea dictumst. Fusce tristique rutrum elit id luctus. Fusce malesuada justo quis mauris scelerisque finibus. Cras porta, tortor non interdum fringilla, lorem erat aliquam justo, ut pulvinar arcu diam in odio. Etiam at nulla commodo, bibendum dolor sed, molestie justo. Integer nulla metus, efficitur eu malesuada placerat, porttitor et sapien.',
		fullprice: 88.99,
		discount: 15,
		stars: 5,
		size: [12, 14],
		isfavorite: true,
		popularproduct: false

	}, {
		id: 2,
		name: '2 GEL-FUJITRABUCO 5 G-TX',
		imgthumb: 'assets/img/shoe.png',
		category: 'Running shoe',
		brandlogo: 'assets/img/brand_logo.jpg',
		shortdescription: 'God og robust terrænløbesko med GORE-TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod.',
		longdescription: 'Tab - 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, elit vitae porttitor facilisis, urna nunc sollicitudin nibh, eu sodales metus nisi a orci. Cras posuere, mauris sit amet congue commodo, ex mauris auctor massa, at tincidunt massa quam eget mauris. Suspendisse quis dignissim lacus. Duis vitae ante non diam porttitor porttitor nec non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ac risus cursus lectus fermentum consectetur. In hac habitasse platea dictumst. Fusce tristique rutrum elit id luctus. Fusce malesuada justo quis mauris scelerisque finibus. Cras porta, tortor non interdum fringilla, lorem erat aliquam justo, ut pulvinar arcu diam in odio. Etiam at nulla commodo, bibendum dolor sed, molestie justo. Integer nulla metus, efficitur eu malesuada placerat, porttitor et sapien.',
		fullprice: 1115.24,
		discount: 15,
		stars: 2,
		size: [12, 16],
		isfavorite: false,
		popularproduct: true
	}, {
		id: 3,
		name: '3 GEL-FUJITRABUCO 5 G-TX',
		imgthumb: 'assets/img/shoe.png',
		category: 'Running shoe',
		brandlogo: 'assets/img/brand_logo.jpg',
		shortdescription: 'God og robust terrænløbesko med GORE-TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod.',
		longdescription: 'Tab - 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, elit vitae porttitor facilisis, urna nunc sollicitudin nibh, eu sodales metus nisi a orci. Cras posuere, mauris sit amet congue commodo, ex mauris auctor massa, at tincidunt massa quam eget mauris. Suspendisse quis dignissim lacus. Duis vitae ante non diam porttitor porttitor nec non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ac risus cursus lectus fermentum consectetur. In hac habitasse platea dictumst. Fusce tristique rutrum elit id luctus. Fusce malesuada justo quis mauris scelerisque finibus. Cras porta, tortor non interdum fringilla, lorem erat aliquam justo, ut pulvinar arcu diam in odio. Etiam at nulla commodo, bibendum dolor sed, molestie justo. Integer nulla metus, efficitur eu malesuada placerat, porttitor et sapien.',
		fullprice: 88.99,
		discount: 15,
		stars: 3,
		size: [12, 14, 16],
		isfavorite: false,
		popularproduct: true
	}];