import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hopitalproject-frontend';
  connected !: boolean;
  constructor() {
  }

  ngOnInit() {
    this.connected = localStorage.getItem('userId') !== null;
  }
}
