import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { text } from '@fortawesome/fontawesome-svg-core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public signupUrl = "http://localhost:5005/user/signup";
  public loginUrl = "http://localhost:5005/user/login";
  public myFavouriteUrl = "http://localhost:5005/user/myfavourite";

  constructor(private http:HttpClient) { }

  public signup(user:any) {
    return this.http.post(this.signupUrl,user,{responseType: 'text'});
  }
  public login(user:any) {
    return this.http.post(this.loginUrl, user,{responseType: 'text'});
  }
  public featchFavourite(userId:any){
    return this.http.get(this.myFavouriteUrl,userId);
  }
  public addFavourite(resume:any) {
    return this.http.post(this.myFavouriteUrl,resume,{responseType: 'text'});
  }
  public removeFavourite(resume:any) {
    return this.http.delete(this.myFavouriteUrl,resume);
  }
  public isLoggedIn(){
    return !!localStorage.getItem('token');
  }
}
