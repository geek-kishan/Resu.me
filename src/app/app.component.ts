import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faPlus = faPlus;
  isShow:boolean = false;
  toggleNavbar(){
    this.isShow = !this.isShow;
  }
}
