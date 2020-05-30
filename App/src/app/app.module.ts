import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardModule } from './shared/modules/card/card.module';
import { DashboardService } from './shared/service/dashboard.service';
import {MatChipsModule} from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsService } from './shared/service/details.service';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DataTableModule } from './shared/modules/data-table/data-table.module';
import { ProductService } from './shared/service/product.service';
import { CartService } from './shared/service/cart.service';
import { HttpService } from './shared/service/http.service';
import { CommonService } from './shared/service/common.service';
import { CartPanelComponent } from './cart-panel/cart-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateComponent } from './products/create/create.component';
import { ListComponent } from './products/list/list.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserRegisterComponent } from './admin/user-register/user-register.component';
import { LoginService } from './shared/service/login.service';
import { UserregisterService } from './shared/service/userregister.service';
import { UserListComponent } from './admin/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CartPanelComponent,
    DashboardComponent,
    MyCartComponent,
    ProductDetailsComponent,
    CreateComponent,
    ListComponent,
    NavbarComponent ,

    HomeComponent,
    AdminComponent,
    UserRegisterComponent,
    UserListComponent 


   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    InfiniteScrollModule,
    CommonModule,
    CardModule,
    MatChipsModule,
    DataTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  
  ],
  providers: [ProductService,DashboardService, ProductDetailsService,CartService,HttpService,CommonService,LoginService,UserregisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
