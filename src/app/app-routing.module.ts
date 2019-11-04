import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { VendorComponent } from './vendor/vendor.component';
import { CreatevendorComponent } from './createvendor/createvendor.component';
import { UpdatevendorComponent } from './updatevendor/updatevendor.component';



const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
    {path:'login',component:LoginComponent},

    {path:'vendor',component:VendorComponent},
    {path:'add',component:CreatevendorComponent},
    {path:'update/:vId',component:UpdatevendorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
