import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  product:any;
  pid=0;
  username: string = '';
  resp:any;

  constructor(private http:HttpClient,
    private activatedRoute: ActivatedRoute,
   
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.pid = params['pid'];
      console.log(this.pid);
      
    });

   

    const baseURL = 'http://localhost:8080/product';
    const params = new HttpParams()
	  .set('product_id', this.pid);
	  

    const fullURL = `${baseURL}?${params}`;
    console.log({ fullURL });
 

    let resp = this.http.get(fullURL);
    resp.subscribe((data)=>console.log(data));
    let resp2 = this.http.get(fullURL);
    resp2.subscribe((data)=>this.product=data);
    
    //const params = new HttpParams().append('?product_id', this.pid);
    //let resp2=this.http.get('http://localhost:8080/product', {params}); 
    //resp2.subscribe((data)=>this.product=data);

  }

  async bid(bid:string) {
    var bidding = { 
      product_id:this.pid,
      bidvalue: bid,  
      buyer_id:sessionStorage.getItem('buyer'),
      };
    console.log('it does nothing',bidding);
    this.resp = await this.http.post("http://localhost:8080/bid",bidding).toPromise();
    console.log(this.resp);
    this.ngOnInit();
  }
  
  
}
