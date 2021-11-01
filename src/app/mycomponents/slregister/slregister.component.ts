import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slregister',
  templateUrl: './slregister.component.html',
  styleUrls: ['./slregister.component.css']
})
export class SlregisterComponent implements OnInit {

  user : any;
  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(data:any)  {
    //let resp = this.http.post("http://localhost:8080/register",data);
    //resp.subscribe((data)=>console.log(data));
    this.user = await this.http.post("http://localhost:8080/slregister",data).toPromise();
    console.log(this.user);
    window.alert('registration complete');
    //if (Object.keys(this.user).length==0) {
     // console.log("No properties")
      //window.alert("wrong Username/Password")
    //}
    //else{
     // console.log("else statement")
      //var buyer=this.user[0].buyer_id;
     // var buyer_name=this.user[0].buyer_name;
     // console.log(buyer);
     // sessionStorage.setItem('buyer',buyer);
     // sessionStorage.setItem('user',buyer_name);
     // this.router.navigate(['/'])  
      
    //}
    
    
  }

}
