import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {
    path:'status',
    component:StatusComponent
  },
  {
    path:'employees',
    component:EmployeesComponent
  },
  {
    path:'',
    redirectTo:'/employees',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
