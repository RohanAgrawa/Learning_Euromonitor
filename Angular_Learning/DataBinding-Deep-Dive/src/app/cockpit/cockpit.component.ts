import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent') serverContentInput : ElementRef;
  onAddServer() {
    // console.log(this.serverContentInput);
    this.serverCreated.emit({serverName : this.newServerName, serverContent : this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName : this.newServerName, serverContent : this.serverContentInput.nativeElement.value});
  }
}
