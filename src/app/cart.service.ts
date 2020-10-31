import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cart } from './Cart';
import { Flower } from './Flower';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart;
  carts: Cart[];

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCarts(): Cart[]{
    return this.carts;
  }


  addCart(flower: Flower): void {
    this.cart = {
      flowerID : flower.id,
      Name : flower.name,
      Img : flower.img,
      Quatity : flower.quantity,
      Price : flower.price,
      subTotal : flower.quantity * flower.price,
    };

  }
}
