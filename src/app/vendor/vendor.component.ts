import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginuserService } from '../loginuser.service';
import {ToastrService,ToastrModule} from 'ngx-toastr';
import{ConfirmationPopoverModule} from 'angular-confirmation-popover';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendor:Vendor[];
  vendors:Observable<Vendor[]>;
  vendorContactDetail=new Vendor();

  constructor(private vendorService:VendorService,private router:Router ,private route:ActivatedRoute,private loginservice:LoginuserService, private toastr:ToastrService) { }

  ngOnInit() {
    this.getVendorDetails();
  }

  //method for getting vendor+ its contact details
  getVendorDetails(): void{
    this.vendorService.getVendorDetails().subscribe((Data)=>
    {
      this.vendor=Data,
      console.log(Data);
    },(error)=>{
      console.log(error);
    }
    );
  }

  searchString:String;
  //search 

  search(searchString)
  {
    console.log("searchString")
    console.log(searchString);
    if(searchString!=null)
    {
        this.vendors =this.vendorService.search(this.searchString);
    }
    else
    {
      console.log("Else :" +searchString)
      // this.getVendorDetails()
      this.reloadData();
    }
}
disable(vId: number,vendor:Vendor){
  this.vendorService.disableVendor(vId,vendor)
  .subscribe(
    data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
    this.toastr.info("Successfully deleted");
}
reloadData() {
  this.vendors=this.vendorService.getVendorDetails();
}

edit(vId:number,vendor:Vendor)
{
  this.router.navigate(['update',vId]);
  this.vendorService.updateVendorDetails(vId,vendor);
  
}
logout(){
  this.toastr.warning("logout Successfully");
  this.loginservice.logout();
  this.router.navigateByUrl('/login');
}

}
