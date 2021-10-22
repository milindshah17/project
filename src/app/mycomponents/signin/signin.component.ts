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
 

  ngOnInit() {
    
   
  }

  
  async onSubmit(data:any)  {
    let resp = this.http.post("http://localhost:8080/signin",data);
    resp.subscribe((data)=>console.log(data));
    this.user = await this.http.post("http://localhost:8080/signin",data).toPromise();
    console.log(this.user);
    if (Object.keys(this.user).length==0) {
      console.log("No properties")
      window.alert("wrong Username/Password")
    }
    else{
      console.log("else statement")
      var buyer=this.user[0].buyer_id;
      console.log(buyer);
      sessionStorage.setItem('buyer',buyer);
      this.router.navigate(['/'])  
      
    }
    
    
  }

}





