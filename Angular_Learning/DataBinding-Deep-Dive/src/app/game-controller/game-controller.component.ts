import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrl: './game-controller.component.css'
})
export class GameControllerComponent {

  intervalId : any;
  @Output() intervalFired = new EventEmitter<number>();
  count : number = 1;
  onStart(){
    this.intervalId = setInterval(()=>{
      this.intervalFired.emit(this.count);
      this.count++;
    }, 1000)
  }

  onStop(){
    clearInterval(this.intervalId);
  }
}
