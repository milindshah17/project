import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-antiques',
  templateUrl: './antiques.component.html',
  styleUrls: ['./antiques.component.css']
})
export class AntiquesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    
  }

}


