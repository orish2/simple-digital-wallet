import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserMsgService } from 'src/services/user-msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mister-bitcoin';
  subscription: Subscription
  msg = '';
  userMsgClass = '';
  constructor(private userMsgService: UserMsgService) {
  }
  ngOnInit() {
    this.subscription = this.userMsgService.msg$.subscribe(data => {
      const clone = { ...data }
      this.msg = clone.msg
      this.userMsgClass = clone.className
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
