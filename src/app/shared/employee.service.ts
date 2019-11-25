import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of as observableOf, BehaviorSubject } from 'rxjs';
import{ Employee } from './employee.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  formData: Employee;
  newUser: any;
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ =this.eventAuthError.asObservable();

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private router:Router) { }
  
  getUserState(){
    return this.afAuth.authState;
  }
 
  //login click event
  login(email:string,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .catch(error =>{
      this.eventAuthError.next(error);
    })
    .then(UserCredential =>{
      if(UserCredential){
       this.router.navigateByUrl('/employees');
        //window.location.href ="/employee";
      }
    })
    

  }
  //create a new user event 
  createUser(user){
    this.afAuth.auth.createUserWithEmailAndPassword(user.email ,user.password)
    .then( usercredentials =>{
      this.newUser=user;
      //console.log(usercredentials+'usercredentials');
      usercredentials.user.updateProfile({
        displayName: user.FirstName +''+ user.LastName
      });
      // after complete register and logged in
      this.insertUserData(usercredentials).then(() => {
        //console.log(usercredentials+'insertdata');
        this.router.navigate(['./home']);
      })
    })
    .catch( error =>{
      this.eventAuthError.next(error);
      
    })

  }

  //Insert a document in firebase User
  insertUserData(usercredentials: firebase.auth.UserCredential){
    return this.firestore.doc(`Users/${usercredentials.user.uid}`).set({
      email: this.newUser.email,
      FirstName: this.newUser.FirstName,
      LastName: this.newUser.LastName,
      role:'Developer',
      
  })
  
}
 
// Logout button click event
  logout(){
    return this.afAuth.auth.signOut();
  }

 // get the collection data in firebase
  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }



}
