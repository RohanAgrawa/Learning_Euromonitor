import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {filter, map, max} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  firstSubscription : Subscription;
  constructor() { }

  ngOnInit() {
    // interval is built in observable which does not complete it just like a set timeout function.
    // this.firstSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = new Observable((subscriber)  => {
      let count = 0;

      setInterval(() => {

        if(count == 2){
          subscriber.complete();
        }

        // if(count == 5){
        //   subscriber.complete();
        // }
        if(count > 3){
          subscriber.error("Count is greater than 3!");
        }
        subscriber.next(count)
        count++;
      }, 1000);
    });
    // this.firstSubscription = customIntervalObservable.subscribe((data) => {
    //   console.log(data);
    // }, (error) => {
    //   console.error(error);
    // }, ()=> {
    //   console.log("completed");
    // });

    this.firstSubscription = customIntervalObservable.pipe(
      //filter((data : number) => data > 0),
      max(),
      map((data : number) => {
        return "Round " + (data);
      })
    ).subscribe({
      error(err){
        console.error(err);
        alert(err.messages)
      },

      next(x){
        console.log(x);
      },

      complete(){
        console.log("completed");
      }
    });
  }

  ngOnDestroy() {
    this.firstSubscription.unsubscribe();
  }
}
