export interface Flower {
  id: number,
  name: string,
  category: string,
  description: string,
  img: string,
  price: number,
  quantity: number,
  isBuy: boolean,
};
export interface OrderList {
  cartID: number,
  total: number,
}
