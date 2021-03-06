import { Component, OnInit } from '@angular/core';
import { Product, isPopularProduct } from './products';
import { PRODUCTITEMS } from '../shared/data';

@Component({
	selector: 'product-item',
	moduleId: module.id,
	templateUrl: 'product-item.component.html'
})

export class ProductItemComponent implements OnInit {
	products = PRODUCTITEMS;

	ngOnInit() {
		this.products = PRODUCTITEMS;
	}

}