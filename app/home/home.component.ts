import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myval: any;
  someval: any;
  constructor() { }

  ngOnInit(): void {
  }

}
