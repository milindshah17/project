import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private http:HttpClient) {

    
  }

  ngOnInit(): void {
  }

  onSubmit(data:any)  {
    let resp = this.http.post("http://localhost:8080/test",data);
    resp.subscribe((data)=>console.log(data));
    //let resp2 = this.http.get("http://localhost:8080/event"L);
    //resp2.subscribe((data)=>this.product=data);
    console.log(data)
    
  }




}
