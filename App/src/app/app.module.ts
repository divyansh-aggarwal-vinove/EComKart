import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserRegisterComponent } from './admin/user-register/user-register.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyorderComponent } from './dashboard/myorder/myorder.component';
import { CartComponent } from './dashboard/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserRegisterComponent,
    ProductDetailsComponent,
    DashboardComponent,
    MyorderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
