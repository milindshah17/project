import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  products : any ;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    let resp = this.http.get("http://localhost:8080/event");
    resp.subscribe((data)=>console.log(data));
    let resp2 = this.http.get("http://localhost:8080/event");
    resp2.subscribe((data)=>this.products=data);
  }

}


