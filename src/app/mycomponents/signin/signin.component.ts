import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{ActivatedRoute} from '@angular/router';


 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

  user : any;

  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router,) {

    
  }
  username= 'true' ;
  password = 'password test';
 

  ngOnInit() {
    
   
  }

  nongOnInit() {
 
    
  }
  onSubmit(data:any)  {
    let resp = this.http.post("http://localhost:8080/signin",data);
    resp.subscribe((data)=>console.log(data));
    let resp2 = this.http.post("http://localhost:8080/signin",data);
    resp2.subscribe((data)=>this.user=data);
    if (!this.user) {
      console.log("No properties")
    }
    else{
      this.router.navigate(['/'])  
    }
    
    
  }

}





