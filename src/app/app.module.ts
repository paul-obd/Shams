import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import {CarouselModule} from 'primeng/carousel';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderLogoPartComponent } from './header-logo-part/header-logo-part.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { HomeRingsComponent } from './home-rings/home-rings.component';
import { HomeBraceletComponent } from './home-bracelet/home-bracelet.component';
import { CartService } from './services/cart.service';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { HomeComponent } from './home/home.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HeaderLogoPartComponent,
    ToolbarComponent,
    HomeRingsComponent,
    HomeBraceletComponent,
    FeaturedProductsComponent,
    HomeComponent,

    ProductDetailsComponent,
    OrderComponent,
    CartComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule

  ],
  providers: [
    ProductsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
