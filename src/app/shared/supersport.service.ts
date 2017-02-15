import { Injectable } from '@angular/core';
import { PRODUCTITEMS } from './data';
import { Product } from '../products/products';

@Injectable() 
export class SupersportService {
	getProducts() : Product[] {
		return PRODUCTITEMS;
	}

	getProductById(productid: number) {
		return PRODUCTITEMS.find(p => p.id === productid);
	}
}