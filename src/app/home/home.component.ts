import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  registerform=true;

  toggleregisterform(){
    this.registerform=!this.registerform;
  }

  cancelRegister(event: boolean) {
      this.registerform=event;
    }
}
