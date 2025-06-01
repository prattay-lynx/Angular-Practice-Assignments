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
      name: 'Avinash',
      position: 'Manager',
      salary: 90000,
      username: 'samal',
      password: '123',
    },
    {
      id: 3,
      name: 'Ayan',
      position: 'Team-Lead',
      salary: 50000,
      username: 'avik',
      password: '123',
    },
    {
      id: 4,
      name: 'Kaniskha',
      position: 'Product Head',
      salary: 50000,
      username: 'banerjee',
      password: '123',
    },
    {
      id: 5,
      name: 'Avirup',
      position: 'System Engineer',
      salary: 90000,
      username: 'avirup',
      password: '123',
    },
    {
      id: 6,
      name: 'Ram',
      position: 'System Engineer',
      salary: 85000,
      username: 'ram',
      password: '123',
    },
    {
      id: 7,
      name: 'Alok',
      position: 'System Engineer',
      salary: 70000,
      username: 'amirul',
      password: '123',
    },
    {
      id: 8,
      name: 'Sam',
      position: 'Data Engineer',
      salary: 65000,
      username: 'sam',
      password: '123',
    },
    {
      id: 9,
      name: 'Projjal',
      position: 'Credit card Engineer',
      salary: 87000,
      username: 'projjal',
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
  getHighestPaidEmployee(): Employee | null {
    if (this.employees.length === 0) return null;
    return [...this.employees].sort((a, b) => b.salary - a.salary)[0];
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter((e) => e.id !== id);
  }
}
