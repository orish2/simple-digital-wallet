import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/models/user.model';
import { BitcoinService } from 'src/services/bitcoin.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscription: Subscription
  bitcoinRate: Observable<object>
  loggedInUser: User

  constructor(private userService: UserService, private route: ActivatedRoute, private bitcoinService: BitcoinService) { }

  // async ngOnInit(): Promise<void> {
  //   this.user = this.userService.getUser().toPromise()
  // }

  ngOnInit(): void {
    // this.userService.loadUser()
    this.subscription = this.route.data.subscribe(data => {
      // console.log('data', data);
      this.loggedInUser = data.user
    })
    this.bitcoinRate = this.bitcoinService.getBitcoinRate()

  }
}
