import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

  <div class="container">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" [routerLinkActive]="['active']" [routerLink]="['tab']">Tab Creator</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLinkActive]="['active']" [routerLink]="['converter']">Converter</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" [routerLinkActive]="['active']" [routerLink]="['other']">Other</a>
  </li>
  </ul>
  
  </div>


  `,
  styles: [

    
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
