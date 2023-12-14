import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class UserService{

  activateEmitter = new Subject<boolean>();
}
