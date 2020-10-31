import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InMemoryDataService } from './in-memory-data.service';
import { ListProductComponent } from './list-product/list-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleProductComponent,
    ListProductComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    AppRoutingModule,

    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
