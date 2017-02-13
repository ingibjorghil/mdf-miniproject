import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'supersport-detail-product',
	moduleId: module.id,
	templateUrl: 'supersport-detail-product.component.html'
})

export class SupersportDetailProductComponent implements OnInit {
	constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    }
}