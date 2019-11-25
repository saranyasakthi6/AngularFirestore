import { Component } from '@angular/core';
import { EmployeeService } from './shared/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFirestore';
  constructor( ){}
}
