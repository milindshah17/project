import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  product:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    let resp = this.http.get("http://localhost:8080/product?product_id=20  ");
    resp.subscribe((data)=>console.log(data));
    let resp2 = this.http.get("http://localhost:8080/product?product_id=20");
    resp2.subscribe((data)=>this.product=data);

  }

}
