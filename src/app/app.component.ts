import { Component, OnInit, inject } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private accountservice=inject(AccountService);
  title = 'Dating App';

  ngOnInit(): void {
    this.setcurrentusers();
  }

  setcurrentusers(){
    const userstring = localStorage.getItem('user');
    if(!userstring) return;
    this.accountservice.currentuser.set(JSON.parse(userstring));
  }
}
