import { Component, OnInit } from '@angular/core';
import { Cart } from '../domain/Cart';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  carts: Cart[];

  constructor(
    private flowerService: FlowerService,
  ) { }

  ngOnInit(): void {
    this.getCarts();
  }
  getCarts(): void {
    this.flowerService.getCarts().subscribe(item => this.carts = item);
  }
}
