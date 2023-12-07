import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot, UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";


@Injectable()

export class AuthGurd implements CanActivate, CanActivateChild{

  constructor(private authenticationService : AuthService, private router : Router) {
  }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean {

    return this.authenticationService.isAuthenticated().then(
      (authenticated : boolean) => {
        if(authenticated){
          return true;
        }
        else {
          this.router.navigate(['/']);
        }
      }
    )
  }

  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
}
