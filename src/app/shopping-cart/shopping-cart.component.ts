import { Component, OnInit } from '@angular/core';
import { Cart } from '../domain/Cart';
import { FlowerService } from '../flower.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  carts: Cart[];

  constructor(
    private flowerService: FlowerService,
  ) { }

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts(): void {
    // this.flowerService.getCarts().subscribe((item) => {
    //   this.carts = item
    // });
    this.flowerService.getCarts().subscribe(item => this.carts = item);
  }
}
