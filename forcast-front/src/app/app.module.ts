import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AdressComponent } from './adress/adress.component';
import { AddressComponent } from './address/address.component';
import { EdditAddressComponent } from './eddit-address/eddit-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HeaderComponent,
    DashboardComponent,
    ShopComponent,
    CheckoutComponent,
    CartComponent,
    HomeComponent,
    ProductsingleComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    AdressComponent,
    AddressComponent,
    EdditAddressComponent,
    EditAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
