import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './vendor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  vId:number;
  apIUrl="http://localhost:9091/FinalProject01/api"

  constructor(private httpService: HttpClient,private router:Router) { }
  getVendorDetails(): Observable<Vendor[]>{
    console.log('Get details');
    return this.httpService.get<Vendor[]>(this.apIUrl+'/vendordetails');
  }
  getVendorDetailsById(vId:number):Observable<Vendor>{
    return this.httpService.get<Vendor>(this.apIUrl+'/vendorbyid/'+vId);
  }
  search(searchString:String):Observable<Vendor[]>
  {
    console.log(searchString);
      return this.httpService.get<Vendor[]>(this.apIUrl+'/search/'+searchString);
   
  }
  createVendor(vendor:Object):Observable<any>{
    return this.httpService.post(this.apIUrl+'/insertvendordetails',vendor);
  }

  updateVendorDetails(vId:number,vendor:Vendor):Observable<any>{
    return this.httpService.put(this.apIUrl+'/updatevendordetails/'+vId,vendor);
  }
  disableVendor(vId:number,vendor:Vendor):Observable<any>{
    return this.httpService.put(this.apIUrl+'/disablevendor/'+vId,vendor);
  }
}




