import { Component, OnInit } from '@angular/core';
import { SportStores } from './supersport';
import { STOREDATA } from '../shared/data';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'supersport-footer',
	moduleId: module.id,
	templateUrl: 'supersport-footer.component.html'
})

export class SupersportFooterComponent implements OnInit {
	
	firstColumnTitle = 'Our Stores';
	secondColumnTitle = 'Blog Posts';
	thirdColumnTitle = 'Support';

	
	stores:SportStores[];

	ngOnInit() {
		this.stores = STOREDATA;
	}
	
	firstlinks = [{
		id: 1,
		name: 'Terms & Conditions'
	}, {
		id: 2,
		name: 'FAQ'
	}, {
		id: 3,
		name: 'Payment'
	}, {
		id: 4,
		name: 'Refunds'
	}, {
		id: 5,
		name: 'Track Order'
	}, {
		id: 6,
		name: 'Services'
	}, {
		id: 7,
		name: 'Privacy & Security'
	}, {
		id: 8,
		name: 'Careers'
	}, {
		id: 9,
		name: 'Press'
	}, {
		id: 10,
		name: 'Corporate Information'
	}];

	secondlinks = [{
		id: 1,
		name: 'Sizing'
	}, {
		id: 2,
		name: 'Ordering'
	}, {
		id: 3,
		name: 'Shipping'
	}, {
		id: 4,
		name: 'Return Policy'
	}, {
		id: 5,
		name: 'Affiliates'
	}, {
		id: 6,
		name: 'Find A Store'
	}, {
		id: 7,
		name: 'Site Map'
	}, {
		id: 8,
		name: 'Sign Up & Save'
	}, {
		id: 9,
		name: 'Blog Posts'
	}]
}
