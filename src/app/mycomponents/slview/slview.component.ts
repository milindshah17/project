import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ActivatedRoute} from '@angular/router'; 
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-slview',
  templateUrl: './slview.component.html',
  styleUrls: ['./slview.component.css']
})
export class SlviewComponent implements OnInit {

  products : any ;
  

  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    var data = { 
            sid:sessionStorage.getItem('seller'),
      };

    let resp = this.http.post("http://localhost:8080/slview",data);
    resp.subscribe((data)=>console.log(data));
    let resp2 = this.http.post("http://localhost:8080/slview",data);
    resp2.subscribe((data)=>this.products=data);

  }

  openpd(pid:Number){
    console.log(pid)
    this.router.navigate(['viewproduct',pid])  }

}
