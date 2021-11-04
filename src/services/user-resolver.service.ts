import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class UsertResolverService implements Resolve<User> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    // const id = route.params.id
    // const user = this.userService.getUser().toPromise()
    // let loggedInUser: User;

    return this.userService.getCurrentUser()
    // console.log('user', user);
    // return loggedInUser
  }
}
