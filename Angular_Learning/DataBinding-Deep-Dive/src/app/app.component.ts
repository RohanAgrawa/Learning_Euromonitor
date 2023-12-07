import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name : 'server1', content : 'test server', type : 'server'}];
  // oddNumbers : number[] = [];
  // evenNumbers : number[] = [];
  numbers : number[] = [];
  title: any;

  onServerAdded(serverData : {serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData : {serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onIntervalFired(event : number){

    this.numbers.push(event);
  }
}
