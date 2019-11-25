import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  user: firebase.User;
  constructor(private router: Router, private service : EmployeeService ) { }

  ngOnInit() {
    this.service.getUserState().subscribe( user =>{
      this.user=user;
      //console.log(JSON.stringify(user)+ 'usermsg');
    })

  }

  register(){
    this.router.navigate(['/register'])
  }

  login(){
    this.router.navigate(['/login'])
  }

  employee(){
    this.router.navigate(['/employees'])
  }

  logout(){
    this.service.logout();
  }

}
