import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database'; 


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

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HeaderLogoPartComponent,
    ToolbarComponent,
    HomeRingsComponent,
    HomeBraceletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
