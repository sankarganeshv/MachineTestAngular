import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loginuser } from '../loginuser';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,private formBuilder:FormBuilder,private loginuserservice:LoginuserService,private toastr:ToastrService) { }
  LoginForm: FormGroup;
  isSubmitted=false;
  loginuser:Loginuser;


  ngOnInit() 
  {
    this.LoginForm=this.formBuilder.group({
      userName:['',Validators.compose([Validators.required])],
      password:['',[Validators.compose([Validators.required, ])]]
    });
  }
  get formControls() { 
    return this.LoginForm.controls; }
//method for logging in
login(){
console.log(this.LoginForm.value);
this.isSubmitted=true;
if(this.LoginForm.valid){
  
  this.loginuserservice.login(this.LoginForm.value).subscribe(
    data =>{
      this.loginuser=data;
      console.log(data);
      console.log(data.userName);
    if(data.userName=='admin' && data.password=='admin') 
    {
      this.isSubmitted=true;
      this.toastr.success("Login Successfully");
      console.log('asset');
      this.router.navigateByUrl('vendor');
    }
   else
   if(data.userName !=null && data.password !=null && data.rollId!=null ){
     console.log('user');
     this.toastr.error("Invalid Username or password")
     window.alert("invalid N or password");
   }
    }
  );
 
}
}
}

