import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatevendor',
  templateUrl: './updatevendor.component.html',
  styleUrls: ['./updatevendor.component.css']
})
export class UpdatevendorComponent implements OnInit {
  vId: number;
  vendor:Vendor;
  vendors: any;
  editVendorForm: FormGroup;
  

  constructor(private router:ActivatedRoute,private route:Router,private vendorservice:VendorService,private fb:FormBuilder,private toastr:ToastrService) { }

  ngOnInit() 
  {
    this.vendor = new Vendor();
    this.createForm();
    this.vId = this.router.snapshot.params['vId'];
    console.log("vendorid: "+this.router.snapshot.params['vId']);

    this.vendorservice.getVendorDetailsById(this.vId)
    .subscribe(data => {
      console.log(this.vId)
      console.log(data)
      this.vendor = data;
     }, error => console.log(error))
  }

  createForm() {
    this.editVendorForm = this.fb.group(
    {
      vName: ['', Validators.required,Validators.minLength(3)],
      vAddress: ['', Validators.required,Validators.minLength(3)],
      vLocation: ['', Validators.required,Validators.minLength(3)],
      vService: ['', Validators.required,Validators.minLength(3)],
      vPincode: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]+')]],
      cName: ['', Validators.required,Validators.minLength(3)],
      // cDepartment: ['', Validators.required],
      cEmail: ['', Validators.required,Validators.email],
      cPhone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]+')]]
    });
  }

  onSubmit() {
    this.updateVendor();
  }

  updateVendor()
  {
    {
      console.log("update"+this.vId+this.vendor);
      this.vendorservice.updateVendorDetails(this.vId,this.vendor)
      .subscribe(data=>console.log(data),error=>console.log(error));
      this.vendor=new Vendor();
       this.toastr.success(' successfully updated!','toastrupdate');
      this.gotoList();
    }
  }



  gotoList() 
  {
    this.vendors = this.vendorservice.getVendorDetails();
    this.route.navigate(['vendor']);
  }

}


 


