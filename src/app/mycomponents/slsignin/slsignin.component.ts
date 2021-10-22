import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-slsignin',
  templateUrl: './slsignin.component.html',
  styleUrls: ['./slsignin.component.css']
})
export class SlsigninComponent implements OnInit {

  user:any;

  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(data:any)  {
    let resp = this.http.post("http://localhost:8080/slsignin",data);
    resp.subscribe((data)=>console.log(data));
    this.user = await this.http.post("http://localhost:8080/slsignin",data).toPromise();
    console.log(this.user);
    if (Object.keys(this.user).length==0) {
      console.log("No properties")
      window.alert("wrong Username/Password")
    }
    else{
      console.log("else statement")
      var seller=this.user[0].seller_id;
      console.log(seller);
      sessionStorage.setItem('seller',seller);
      this.router.navigate(['/'])  
      
    }
    
    
  }

}
