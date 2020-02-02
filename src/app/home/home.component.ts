import { Component, OnInit } from '@angular/core';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faBars = faBars;
  faTimesCircle = faTimesCircle;
  isShow:boolean = false;
  searchForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  toggleSidebar() {
    this.isShow = !this.isShow;
  }

  ngOnInit() {
  }

}
