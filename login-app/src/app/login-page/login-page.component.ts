import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, CommonModule, PopUpComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  popUpShow: Boolean = false;

  onLogin() {
    this.popUpShow = true;
  }

  onLogout() {
    this.popUpShow = false;
  }
}
