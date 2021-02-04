import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService
    ) {
  }

  ngOnInit() {
    // get productId from route
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    // get the right product from the data source
    this.product = products.find( product => product.id === productId);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    window.alert(`${this.product.name} has been added to the cart!`);
  }

}