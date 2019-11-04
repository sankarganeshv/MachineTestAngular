import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { FormsModule,ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
import { CreatevendorComponent } from './createvendor/createvendor.component';
import { UpdatevendorComponent } from './updatevendor/updatevendor.component';
import{NgxPaginationModule} from'ngx-pagination';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VendorComponent,
    CreatevendorComponent,
    UpdatevendorComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule, 
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    HttpClientModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'})
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
