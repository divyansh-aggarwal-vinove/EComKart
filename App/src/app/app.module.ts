import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserRegisterComponent } from './admin/user-register/user-register.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyorderComponent } from './dashboard/myorder/myorder.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { WindowRefService } from './window-ref.service';
import { LoginService } from './login.service';
import { UserregisterService } from './admin/userregister.service';
import { ProductdetailsService } from './admin/productdetails.service';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ProductListComponent } from './admin/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserRegisterComponent,
    ProductDetailsComponent,
    DashboardComponent,
    MyorderComponent,
    CartComponent,
    UserListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WindowRefService,
    UserregisterService,
    ProductdetailsService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
