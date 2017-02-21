import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Product } from '../products/products';
import { ProductItemComponent } from '../products/product-item.component';
import { PRODUCTITEMS } from '../shared/data';
import { SupersportService } from '../shared/supersport.service'

@Component({
	selector: 'supersport-detail-product',
	moduleId: module.id,
	templateUrl: 'supersport-detail-product.component.html'
})

export class SupersportDetailProductComponent implements OnInit {
    
	constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private router: Router,
    private supersportService: SupersportService) {}

  productid: number;
  product : Product;
  ngOnInit() {
      this.titleService.setTitle('Supersports - Running shoes');
      this.productid = +this.route.snapshot.params['id'];
      this.product = this.supersportService.getProductById(this.productid);
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          document.body.scrollTop = 0;
      });
  }
}