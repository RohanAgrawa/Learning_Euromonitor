import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  allowUser = false;

  serverCreationStatus = 'No server created';

  serverName = "";
  serverCreated = false;

  constructor() {

    setTimeout(() => {
      this.allowUser = true;
    }, 1000)
  }

  onCreateServer() : void {
    this.serverCreated = true;
    this.serverCreationStatus = "Server Created";
  }

  onUpdateServerName(event : Event) {
    
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
