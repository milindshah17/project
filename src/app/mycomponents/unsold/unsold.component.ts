import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unsold',
  templateUrl: './unsold.component.html',
  styleUrls: ['./unsold.component.css']
})
export class UnsoldComponent implements OnInit {

  products : any ;

  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    var data = {
      sid: sessionStorage.getItem('seller'),
    };

    let resp = this.http.post("http://localhost:8080/slviewunsold", data);
    resp.subscribe((data) => console.log(data));
    let resp2 = this.http.post("http://localhost:8080/slviewunsold", data);
    resp2.subscribe((data) => this.products = data);

  }

  openpd(pid: Number) {
    console.log(pid)
    this.router.navigate(['viewproduct', pid])
  }

}
