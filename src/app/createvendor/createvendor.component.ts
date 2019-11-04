import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-createvendor',
  templateUrl: './createvendor.component.html',
  styleUrls: ['./createvendor.component.css']
})
export class CreatevendorComponent implements OnInit {
  vendor=new Vendor();
  details:Vendor[];
  submitted = false;
  addvendorForm: FormGroup;
  vId:number;
  

  constructor(private vendorservice:VendorService,private fb:FormBuilder) { }

  ngOnInit() {
    this.getVendorById();
   
  }

   private reset()
  {
    this.vendor.vName=null;
    this.vendor.vAddress=null;
    this.vendor.vLocation=null;
    this.vendor.pincode=null;
    this.vendor.email=null;
    // this.vendor.department=null;
    this.vendor.phone=null;
    this.vendor.cName=null;
    this.vendor.vService=null;

  }
  //method for adding number
  add():void{
    console.log(this.vendor);
    this.vendorservice.createVendor(this.vendor).subscribe((response)=>
    {
      console.log(response);
      this.reset();
      this.getVendors();
    },(error)=>{
      console.log(error);
    }
    );
  }
  //method for getting vendor by its id
  getVendorById(): void{
  this.vendorservice.getVendorDetailsById(this.vId).subscribe((Data)=>
  {
    this.vendor=Data,
    console.log(Data);
  },(error)=>{
    console.log(error);
  }
  );
}

//method for getting vendor  its contact details
getVendors(): void{
  this.vendorservice.getVendorDetails().subscribe((Data)=>
  {
    this.details=Data,
    console.log(Data);
  },(error)=>{
    console.log(error);
  }
  );
}

}
