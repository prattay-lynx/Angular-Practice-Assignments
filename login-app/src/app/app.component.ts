import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'login-app';
}
