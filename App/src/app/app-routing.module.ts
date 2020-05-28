import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { UserRegisterComponent } from './admin/user-register/user-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { MyorderComponent } from './dashboard/myorder/myorder.component';


const routes: Routes = [{ path: '', component: HomeComponent },
{
  path: 'admin', component: AdminComponent,
  children: [{ path: 'productdetails', component: ProductDetailsComponent },
  { path: 'userregister', component: UserRegisterComponent }]
},
{ path: 'dashboard', component: DashboardComponent },
{ path: 'cart/:id', component: CartComponent },
{ path: 'myorder/:id', component: MyorderComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
