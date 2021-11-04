import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Message } from "src/models/message.model";



@Injectable({
  providedIn: 'root'
})
export class UserMsgService {
  private emptyMsg = { msg: '', className: 'danger' }
  private _msg$ = new BehaviorSubject<Message>(this.emptyMsg)
  public msg$ = this._msg$.asObservable()

  public showMsg(newMsg: Message) {
    console.log('mmm', newMsg);
    this._msg$.next(newMsg)
    setTimeout(() => {
      this._msg$.next(this.emptyMsg)
    }, 2000);
  }

  public getCurrentMsg(): Observable<Message> {
    return of(this._msg$.value)
  }


}



// getCurrentUser(): Observable<User> {
//   return of(this._user.value);
// }