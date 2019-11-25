import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './Dashboard/login/login.component';
import { RegistrationComponent } from './Dashboard/registration/registration.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { EmployeesComponent } from './employees/employees.component';
const appRoutes:Routes =[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'employees',component:EmployeesComponent}
]

@NgModule({
  
  imports: [
     RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
