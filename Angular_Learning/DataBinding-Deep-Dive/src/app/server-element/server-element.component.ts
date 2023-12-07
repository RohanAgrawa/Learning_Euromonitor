import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit{
  @Input('srvElement')element : {name : string, content : string, type : string};

  constructor() {
    console.log("Constructor called!");
  }

  ngOnInit() {
    console.log("ng OnInit called!")
  }
}
