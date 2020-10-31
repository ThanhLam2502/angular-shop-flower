import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SingleProductComponent } from './single-product/single-product.component';


const routes: Routes = [
  { path: '', redirectTo: '/flowers', pathMatch: 'full' },
  { path: 'flowers', component: ListProductComponent },
  { path: 'detail/:id', component: SingleProductComponent },
  { path: 'cart', component: ShoppingCartComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
