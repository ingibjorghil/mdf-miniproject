import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Products } from '../products/products.interface';
import { ProductItemComponent } from '../products/product-item.component';
import { PRODUCTITEMS } from '../shared/data';

@Component({
	selector: 'supersport-detail-product',
	moduleId: module.id,
	templateUrl: 'supersport-detail-product.component.html'
})

export class SupersportDetailProductComponent implements OnInit {
    productid: number;

	constructor(
        private _route: ActivatedRoute,
        private _router: Router) { }
    
    products:Products[];

    ngOnInit() {
        this.products = PRODUCTITEMS;
        this.productid = +this._route.snapshot.params['id'];
        this.products = this._route.snapshot.data['product']
        this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    }
}