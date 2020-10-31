import { Component, OnInit } from '@angular/core';
import { Flower } from '../Flower';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  flowers: Flower[];

  constructor(
    private flowerService: FlowerService,
  ) { }

  ngOnInit(): void {
    this.getFlowers();
  }

  getFlowers(): void {
    this.flowerService.getFlowers()
      .subscribe(item => this.flowers = item);
  }
}
