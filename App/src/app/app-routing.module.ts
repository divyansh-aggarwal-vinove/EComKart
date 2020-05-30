import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartPanelComponent } from './cart-panel/cart-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateComponent } from './products/create/create.component';
import { ListComponent } from './products/list/list.component';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserRegisterComponent } from './admin/user-register/user-register.component';
import { UserListComponent } from './admin/user-list/user-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent },

  {
    path: 'admin', component: AdminComponent,
    children: [{ path: 'userlist', component: UserListComponent },
    { path: 'userregister', component: UserRegisterComponent },
    { path: 'useredit/:id', component: UserRegisterComponent },
    {path: 'products', component: ListComponent, children: [
      {path: 'create', component: CreateComponent},
      {path: 'edit/:uid', component: CreateComponent}
    ]},
    ]
  },

    {path: 'dashboard',component: DashboardComponent },
    // {path: 'products', component: ListComponent, children: [
    //   {path: 'create', component: CreateComponent},
    //   {path: 'edit/:uid', component: CreateComponent}
    // ]},
    {path: 'create', component: CreateComponent},
    {path: 'product/:id',component: ProductDetailsComponent },
    {path: 'my-cart',component: MyCartComponent},
    {path: '**', redirectTo: 'dashboard'}
  

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
