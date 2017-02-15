import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from '../products/products.interface';
import { ProductItemComponent } from '../products/product-item.component';
import { PRODUCTITEMS } from '../shared/data';

@Component({
	selector: 'supersport-frontpage',
	moduleId: module.id,
	templateUrl: 'supersport-frontpage.component.html'
})

export class SupersportFrontpageComponent {
	constructor(private titleService: Title) { }
    
	products:Product[];

    ngOnInit() {
        this.titleService.setTitle('Supersports');
        this.products = PRODUCTITEMS;
    }

	frontpagecategories = [{
		id: 1,
		img: './assets/img/shoes.png',
		headline: 'FOOTBALL SHOES',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing, vivamus congue nulla leo, quis imperdiet magna.'
	}, {
		id: 2,
		img: './assets/img/clothes.png',
		headline: 'MODERN CLOTHES',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing, vivamus congue nulla leo, quis imperdiet magna.'
	}, {
		id: 3,
		img: './assets/img/bag.png',
		headline: 'BAGS & ACCESSORIES',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing, vivamus congue nulla leo, quis imperdiet magna.'
	},]
}