import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Signin {  
  id: Number;  
  name: String;  
  
}  

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

  users : any;

  constructor(private http:HttpClient) {

    
  }
  username= 'true' ;
  password = 'password test';
 

  ngOnInit() {
    
   
  }

  nongOnInit() {
    let resp = this.http.get("http://localhost:8080/event");
    resp.subscribe((data)=>console.log(data));
    let resp2 = this.http.get("http://localhost:8080/event");
    resp2.subscribe((data)=>this.users=data);
  
    
   
    
  }

}


