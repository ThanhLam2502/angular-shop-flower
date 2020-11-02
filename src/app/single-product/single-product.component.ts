import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isTemplateExpression } from 'typescript';
import { Cart } from '../domain/Cart';
import { Flower } from '../domain/Flower';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  flower: Flower;
  carts: Cart[];

  constructor(
    private route: ActivatedRoute,
    private flowerService: FlowerService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getFlower();
  }

  getFlower(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.flowerService.getFlower(id)
      .subscribe(item => this.flower = item);
  }
  onSubmit(values): void {
    let subTotal = values.price * values.quantity;
    let cart: Cart = { userID: values.userID, flowerID: values.productID, name: values.name, img: values.img, price: values.price, quatity: values.quantity, subTotal: subTotal };

    this.flowerService.addCart(cart);
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
}
