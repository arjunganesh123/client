import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject, signal } from '@angular/core';
import { User } from '../_models/User';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseurl = 'https://localhost:5001/api/';
  currentuser = signal<User|null>(null);
  
  login(model: any){
    return this.http.post<User>(this.baseurl+'account/login',model).pipe(
      map((member: User | null)=>{
        if(member){
          localStorage.setItem('user',JSON.stringify(member));
          this.currentuser.set(member);
        }
      })
    );
  }

  register(model: any){
    return this.http.post<User>(this.baseurl+'account/register',model).pipe(
      map((member: User | null)=>{
        if(member){
          localStorage.setItem('user',JSON.stringify(member));
          this.currentuser.set(member);
        }
        return member;
      })
    );
  }

  logout(){
    localStorage.removeItem('user');
    this.currentuser.set(null);
  }
}
