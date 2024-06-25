import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone : true,
  imports : [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private accountservice = inject(AccountService);
  @Output() cancelRegister = new EventEmitter();
  model:any={};

  register(){
    this.accountservice.register(this.model).subscribe({
      next:response=>{
        console.log(response);
        this.cancel();
      },
      error:error=>console.log(error),
    })
  }

  cancel(){
    this.cancelRegister.emit(true);
  }
}
