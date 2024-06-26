import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { NgIf } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  standalone : true,
  imports : [FormsModule,NgIf,BsDropdownModule],
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  accountservice = inject(AccountService);
  model:any={}

  login(){
    this.accountservice.login(this.model).subscribe({
      next : (response: any) => {
        console.log(response);
      },
      error : (error: any) => console.log(error),
    })
  }

  logout(){
    this.accountservice.logout();
  }
}
