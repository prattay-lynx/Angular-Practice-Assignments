import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false,
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  highestPaid: Employee | null = null;
  loggedInEmployee: Employee | null = null;

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.loggedInEmployee = this.empService.getLoggedInUser();
    this.employees = this.empService.getEmployees();
    this.updateHighestPaid();
  }

  updateHighestPaid() {
    this.highestPaid = [...this.employees].sort(
      (a, b) => b.salary - a.salary
    )[0];
  }

  editEmployee(emp: Employee) {
    const newSalary = prompt('Enter new salary', emp.salary.toString());
    if (newSalary) {
      emp.salary = +newSalary;
      this.empService.updateEmployee(emp);
      this.updateHighestPaid();
    }
  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id);
    this.employees = this.empService.getEmployees();
    this.updateHighestPaid();
  }
}
