import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tcns',
  templateUrl: './tcns.component.html',
  styleUrls: ['./tcns.component.css']
})
export class TcnsComponent implements OnInit {

  products: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('seller')!==null )
    {
      var data = {
        sid: sessionStorage.getItem('seller'),
      };
      console.log('seller transactions');
      let resp = this.http.post("http://localhost:8080/sltcns", data);
      resp.subscribe((data) => console.log(data));
      let resp2 = this.http.post("http://localhost:8080/sltcns", data);
      resp2.subscribe((data) => this.products = data);
      
    }

    if (sessionStorage.getItem('buyer')!==null )
    {
      var data = {
        sid: sessionStorage.getItem('buyer'),
      };
      console.log('buyer transactions');  
      let resp = this.http.post("http://localhost:8080/bytcns", data);
      resp.subscribe((data) => console.log(data));
      let resp2 = this.http.post("http://localhost:8080/bytcns", data);
      resp2.subscribe((data) => this.products = data);
      
    }
    



  }

  openpd(pid: Number) {
    console.log(pid)
    this.router.navigate(['viewproduct', pid])
  }

}
