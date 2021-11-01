import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products:any;
  category:string ='';
  username: string = '';
  resp:any;
  

  constructor(
    private http:HttpClient,
    private activatedRoute: ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.category = params['cat'];
      console.log(this.category);
      
    });

    const baseURL = 'http://localhost:8080/category';
    const params = new HttpParams()
	  .set('category', this.category);
	  

    const fullURL = `${baseURL}?${params}`;
    console.log({ fullURL });

    let resp = this.http.get(fullURL);
    resp.subscribe((data)=>console.log(data));
    let resp2 = this.http.get(fullURL);
    resp2.subscribe((data)=>this.products=data);

    




  }
  
  openpd(pid:Number){
    console.log(pid)
    this.router.navigate(['viewproduct',pid])  }
}


