import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EMPLOYEES } from '../employeemock';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = EMPLOYEES;
  employee: Employee = {
    id: 0,
    name: '',
    email:'',
    address:'',
    phone: 123
  };
  constructor(private router: Router) { }

  onAdd(){
      if(this.employee.name.length == 0 && this.employee.email.length == 0){
        alert("Please fill Username and password");
      }
      else if(this.employee.name.length > 0 && this.employee.email.length > 0){
        this.employee.id = this.employees.length;
        this.employee = {
          id: this.employees.length + 1,
          name: this.employee.name,
          email:this.employee.email,
          address:this.employee.address,
          phone:this.employee.phone

        };
        this.employees.push(this.employee);
        alert("Add customer");
      }
  }
  onRemove(empnum){
  var employeeList:Employee[] = [];
  for(var i = 0;i<this.employees.length;i++){
    if(this.employees[i].id != empnum ){
      employeeList.push(this.employees[i]);
    }
  }
  this.employees=employeeList;
  }
  ngOnInit() {
  }

}
