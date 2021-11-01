import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  products: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    var data = {
      b_id: sessionStorage.getItem('buyer'),
    };
    console.log('buyer bids');  
    let resp = this.http.post("http://localhost:8080/bids", data);
    resp.subscribe((data) => console.log(data));
    let resp2 = this.http.post("http://localhost:8080/bids", data);
    resp2.subscribe((data) => this.products = data);
  }

  openpd(pid: Number) {
    console.log(pid)
    this.router.navigate(['viewproduct', pid])
  }

}
