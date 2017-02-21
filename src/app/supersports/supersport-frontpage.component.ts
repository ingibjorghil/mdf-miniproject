import { Component, Input, Output, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from '../products/products';
import { ProductItemComponent } from '../products/product-item.component';
import { PRODUCTITEMS } from '../shared/data';
import { StarRatingComponent } from './star-rating.component';

@Component({
	selector: 'supersport-frontpage',
	moduleId: module.id,
	templateUrl: 'supersport-frontpage.component.html',
})

export class SupersportFrontpageComponent implements OnInit{
	constructor(private titleService: Title) { }
    
	products:Product[];

  ngOnInit() {
      this.titleService.setTitle('Supersports');
      this.products = PRODUCTITEMS;
  }

  starRatingComponentClick(clickObj: any): void {
      console.log(`The Item ${clickObj.itemId} 
          has been given ${clickObj.stars} stars, 
          now is time to update the item with the new rating`);
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