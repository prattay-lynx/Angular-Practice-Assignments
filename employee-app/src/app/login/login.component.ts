import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  empty = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  login() {
    if (!this.username || !this.password) {
      this.error = 'Please enter Credentials';
      return;
    }
    if (this.employeeService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
