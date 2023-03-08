import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isOpened:boolean = true

  onToggle(){
    this.isOpened = !this.isOpened
  }
}
