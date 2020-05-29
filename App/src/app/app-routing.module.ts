import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { UserRegisterComponent } from './admin/user-register/user-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { MyorderComponent } from './dashboard/myorder/myorder.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ProductListComponent } from './admin/product-list/product-list.component';


const routes: Routes = [{ path: '', component: HomeComponent },
{
  path: 'admin', component: AdminComponent,
  children: [{ path: 'userlist', component: UserListComponent },
  { path: 'userregister', component: UserRegisterComponent },
  { path: 'useredit/:id', component: UserRegisterComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'productdetails', component: ProductDetailsComponent },
  { path: 'productedit/id:', component: ProductDetailsComponent },]
},
{ path: 'dashboard', component: DashboardComponent },
{ path: 'cart/:id', component: CartComponent },
{ path: 'myorder/:id', component: MyorderComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
