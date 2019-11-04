import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Loginuser } from './loginuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  constructor(private httpService:HttpClient) { }
  public login(userInfo:Loginuser)
   {
     console.log(environment.apiUrl+'/username/'+userInfo.userName)
    localStorage.setItem('ACCESS TOKEN',"access_token");
     return this.httpService.get<Loginuser>(environment.apiUrl+'/'+userInfo.userName+'/'+userInfo.password);
  }
  public isLoggedIn()
  {
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
  public logout()
  {
    localStorage.removeItem('ACCESS TOKEN');
  }
}
