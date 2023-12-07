import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  isUpdate = false;
  constructor(private serversService: ServersService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(
      (param:any ) => {
        this.allowEdit = param['allowEdit'] === '1' ? true : false;
        console.log(this.allowEdit)
      }
    );
    this.route.fragment.subscribe();

    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.isUpdate = true;
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus})
    this.router.navigate(["../"], {relativeTo : this.route, queryParamsHandling : 'preserve'})
  }

  canDeactivate() : Promise<boolean> | Observable<boolean> | boolean {

    if(!this.allowEdit){
      return false;
    }

    else if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.isUpdate){
      return confirm("Do you want to discard the changes?")
    }

    else{
      return true;
    }
  }
}
