import { Pipe, PipeTransform } from '@angular/core';

import { isPopularProduct } from './products.interface';

@Pipe({ name: 'popularproduct' })
export class PopularProductPipe implements PipeTransform {
  transform(allProducts: isPopularProduct) {
    return allProducts.filter(product => product.popularproduct);
  }
}