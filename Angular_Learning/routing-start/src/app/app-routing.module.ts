import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {ServerComponent} from "./servers/server/server.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGurd} from "./auth-gurd.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolver} from "./servers/server/server-resolver.service";

const appRoutes : Routes =[
  {path : '', component : HomeComponent, title : 'Home'},
  {path : 'users', component : UsersComponent, title : 'Users', children : [
      {path : ':id/:name', component : UserComponent, title : 'User'}
    ]},
  {path : 'servers', component : ServersComponent, canActivate : [AuthGurd], title : 'Servers', children :[
      {path : ':id/edit', component : EditServerComponent,  canDeactivate : [CanDeactivateGuard], title : 'Edit Server'},
      {path : ':id', component : ServerComponent, title : 'Server', resolve : {Server : ServerResolver}}
    ]},

  // {path : 'not-found', component : NotFoundComponent, title : 'Not Found'}
  {path : 'not-found', component : ErrorPageComponent, title : 'error', data : {message : 'Page not found!'}},
  {path : '**', redirectTo : 'not-found'}
];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})

export class AppRoutingModule{

}
