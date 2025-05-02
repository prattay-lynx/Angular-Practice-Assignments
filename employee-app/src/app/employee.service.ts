import { Injectable } from '@angular/core';
import { Employee } from './models/employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees: Employee[] = [
    {
      id: 1,
      name: 'Prattay',
      position: 'Data Engineer',
      salary: 60000,
      username: 'prattay',
      password: '123',
    },
    {
      id: 2,
      name: 'Samal',
      position: 'Manager',
      salary: 90000,
      username: 'samal',
      password: '123',
    },
    {
      id: 3,
      name: 'Avik',
      position: 'Team-Lead',
      salary: 50000,
      username: 'avik',
      password: '123',
    },
    {
      id: 4,
      name: 'Mr. Banerjee',
      position: 'Product Head',
      salary: 50000,
      username: 'banerjee',
      password: '123',
    },
  ];

  private loggedInUser: Employee | null = null;

  login(username: string, password: string): boolean {
    const user = this.employees.find(
      (emp) => emp.username === username && emp.password === password
    );
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  getLoggedInUser(): Employee | null {
    return this.loggedInUser;
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  updateEmployee(updated: Employee) {
    const index = this.employees.findIndex((e) => e.id === updated.id);
    if (index > -1) {
      this.employees[index] = { ...updated };
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter((e) => e.id !== id);
  }
}
