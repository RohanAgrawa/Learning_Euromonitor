import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import {ShortenPipe} from "./pipes/shorten.pipe";
import { FilterPipe } from './pipes/filter.pipe';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    ReverseStringPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
