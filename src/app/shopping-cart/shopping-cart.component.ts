import { Component, OnInit } from '@angular/core';
import { Cart } from '../Cart';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  carts: Cart[];

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    // this.getCarts();
  }
  getCarts(): void {
    this.cartService.getCarts();
  }
}
