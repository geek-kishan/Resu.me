import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-myresume',
  templateUrl: './myresume.component.html',
  styleUrls: ['./myresume.component.css']
})
export class MyresumeComponent implements OnInit {
  isShow:boolean = false;
  faBars = faBars;
  
  toggleSidebar() {
    this.isShow = !this.isShow;
  }

  constructor() { }
  ngOnInit() {

  }

}
