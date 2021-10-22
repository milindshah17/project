import { Component, OnInit } from '@angular/core';

import{ActivatedRoute} from '@angular/router'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  login=false;
  buyerlogin=false;
  sellerlogin=false;

  constructor(private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    
    if (sessionStorage.getItem('buyer')==null && sessionStorage .getItem('seller')==null)
    {
      this.login = false;    
      this.buyerlogin=false;
      this.sellerlogin=false;
    }
    else if (sessionStorage.getItem('buyer')!==null){
      console.log('buyer login')
      this.buyerlogin = true  ; 
      this.login = true;

    }
    else if (sessionStorage.getItem('seller')!==null){
      console.log('seller login')
      this.sellerlogin = true  ; 
      this.login = true;
    }

  }
  signout(){
    sessionStorage.clear();
    this.ngOnInit();
   // this.router.navigate(['/']);
  }
  
}
