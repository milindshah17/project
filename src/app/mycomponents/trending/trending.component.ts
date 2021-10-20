import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ActivatedRoute} from '@angular/router'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  products : any ;
  
  
  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router,
    
    ) { }

  ngOnInit(): void {

    let resp = this.http.get("http://localhost:8080/products");
    resp.subscribe((data)=>console.log(data));
    let resp2 = this.http.get("http://localhost:8080/products");
    resp2.subscribe((data)=>this.products=data);
  }

  openpd(pid:Number){
    console.log(pid)
    this.router.navigate(['viewproduct',pid])  }
}



