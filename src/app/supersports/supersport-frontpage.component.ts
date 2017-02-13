import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'supersport-frontpage',
	moduleId: module.id,
	templateUrl: 'supersport-frontpage.component.html'
})

export class SupersportFrontpageComponent {
	constructor(private titleService: Title) { }
    ngOnInit() {
        this.titleService.setTitle('Supersports');
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