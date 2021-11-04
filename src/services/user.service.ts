import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { User } from "src/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private _usersDb: User[] = [
    {
      _id: 'u101',
      name: 'Ori Sharon',
      email: 'orish@1.com',
      password: '123',
      phone: '050-9497262',
      coins: 100,
      moves: []
    }
  ]
  private _user$ = new BehaviorSubject<User>(this._usersDb[0])

  public user$ = this._user$.asObservable()

  // private _user$ = new BehaviorSubject<User>(this.initalUsers[0])
  // public user$ = this._user$.asObservable()

  // loadUser() {
  //   this._user = new BehaviorSubject<User>(this._usersDb[0])
  //   this.user$ = this._user.asObservable()
  // }

  getCurrentUser(): Observable<User> {
    return of(this._user$.value);
  }

  save(user: User) {
    this._updateUser(user)
  }

  private _updateUser(updatedUser: User) {
    //mock the server work
    this._usersDb = this._usersDb.map(user => updatedUser._id === user._id ? updatedUser : user)
    this._user$.next(updatedUser)

    // change the observable data in the service - let all the subscribers know
    // this._users$.next(this._sort(this._usersDb))
  }



}