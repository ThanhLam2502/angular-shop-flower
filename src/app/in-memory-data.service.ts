import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cart } from './domain/Cart';
import { Flower } from './domain/Flower';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const flowers: Flower[] = [
      { id: 1, name: "flower 01" , category: "f01", description: "First flower", img: "assets/img/product/shop_item_01.jpg", price: 1, quantity: 10, isBuy: true },
      { id: 2, name: "flower 02" , category: "f02", description: "Second flower", img: "assets/img/product/shop_item_02.jpg", price: 1, quantity: 10, isBuy: true },
      { id: 3, name: "flower 03" , category: "f03", description: "Third flower", img: "assets/img/product/shop_item_03.jpg", price: 1, quantity: 10, isBuy: true },
      { id: 4, name: "flower 04" , category: "f04", description: "Fourth flower", img: "assets/img/product/shop_item_04.jpg", price: 1, quantity: 10, isBuy: true },
      { id: 5, name: "flower 05" , category: "f05", description: "Fifth flower", img: "assets/img/product/shop_item_05.jpg", price: 1, quantity: 10, isBuy: true },
      { id: 6, name: "flower 06" , category: "f06", description: "Sixth flower", img: "assets/img/product/shop_item_06.jpg", price: 1, quantity: 10, isBuy: true },
      { id: 7, name: "flower 07" , category: "f07", description: "Seventh flower", img: "assets/img/product/shop_item_07.jpg", price: 1, quantity: 10, isBuy: true },
      { id: 8, name: "flower 08" , category: "f08", description: "Eighth flower", img: "assets/img/product/shop_item_08.jpg", price: 1, quantity: 10, isBuy: true },
      { id: 9, name: "flower 09" , category: "f09", description: "Ninth flower", img: "assets/img/product/shop_item_09.jpg", price: 1, quantity: 10, isBuy: true },

    ];
    const carts: Cart[] = [
      { userID: 1, flowerID: 1, name: "Name", img: "assets/img/product/shop_item_09.jpg", price: 2, quatity: 3, subTotal: 6 },
      { userID: 1, flowerID: 2, name: "Name", img: "assets/img/product/shop_item_09.jpg", price: 2, quatity: 4, subTotal: 8 },
    ];
   ;
    return { flowers, carts };
  }
}


