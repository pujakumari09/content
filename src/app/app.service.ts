import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootUrl="https://reqres.in/api";

  register(data:any){
    console.log(data)
    return this.http.post(this.rootUrl+'/register',data);
  }

  login(data: any){
    return this.http.post(this.rootUrl+'/login', data);
  }

  list(page: number){
    return this.http.get('https://mocki.io/v1/34aa597a-35bc-4e74-9339-c8a362e34818?page='+page);
  }
}
