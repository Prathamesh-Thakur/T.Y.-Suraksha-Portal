import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginId = 0;

  imageSrc = 'assets/images/portal-icon.png'  
  imageAlt = 'iPhone'

  constructor() { }

  ngOnInit(): void {
  }

  onLogging(): void{
    this.loginId = 1;
  }

}
