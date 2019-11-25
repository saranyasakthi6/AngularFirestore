import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  authErrors: any;

  constructor( private service : EmployeeService,private routes:Router) { }

  ngOnInit() {
    this.service.eventAuthError$.subscribe(data =>{
      this.authErrors=data;
    })
  }

  createUser(frm){
    this.service.createUser(frm.value);
  }

  cancel(){
    this.routes.navigate(['/login']);
  }
}
