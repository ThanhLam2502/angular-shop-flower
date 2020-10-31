import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Flower } from '../Flower';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  flower: Flower;

  constructor(
    private route: ActivatedRoute,
    private flowerService: FlowerService,
    private cartService: CartService,
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
  onSubmit(form) {
    this.flowerService.getFlower(form.value.id)
      .subscribe(item => this.flower = item);
    this.cartService.addCart(this.flower);
  }

}
