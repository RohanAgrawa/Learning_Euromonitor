import { Component } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

  public error: string;

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.error = this.route.snapshot.data['message'];
    this.route.data.subscribe((data: Data) => {
      this.error = data['message'];
    })
  }
}
