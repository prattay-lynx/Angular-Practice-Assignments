import { Component, Input } from '@angular/core';
// import { DashboardComponent } from '../dashboard/dashboard.component';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-highest-salary',
  standalone: false,
  templateUrl: './highest-salary.component.html',
  styleUrl: './highest-salary.component.css',
})
export class HighestSalaryComponent {
  @Input() highpaidsal: Employee | null = null;

  constructor(private empS: EmployeeService) {}

  ngOnInit() {
    this.highpaidsal = this.empS.getHighestPaidEmployee();
  }
}
