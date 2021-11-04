import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/models/contact.model';
import { Message } from 'src/models/message.model';
import { Move } from 'src/models/move.model';
import { User } from 'src/models/user.model';
import { ContactService } from 'src/services/contact.service';
import { UserMsgService } from 'src/services/user-msg.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  subscription: Subscription
  subscription2: Subscription
  contact: Contact
  loggedInUser: User
  movesToShow: Move[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private userMessage: UserMsgService, private userService: UserService) {

  }
  async ngOnInit(): Promise<void> {

    this.subscription = this.route.data.subscribe(data => {
      this.contact = { ...data.contact }
      this.loggedInUser = { ...data.user }
    })
    this.movesToShow = this.loggedInUser.moves.filter(move => move.to === this.contact._id)
  }

  handleTransfer(amount: number) {

    if (!amount || amount <= 0 || amount > this.loggedInUser.coins) {
      return this.userMessage.showMsg({ msg: 'invalid amount', className: "danger" })
    }
    let updatedUser = JSON.parse(JSON.stringify(this.loggedInUser));
    updatedUser.coins -= amount;
    updatedUser.moves.unshift({
      to: this.contact._id,
      name: this.contact.name,
      amount,
      at: new Date(),
    });
    console.log('updatedUser', updatedUser);
    this.userService.save(updatedUser)
    this.userMessage.showMsg({
      msg: `${amount} bitcoins trasferred successfully`, className: 'success'
    } as Message)
    setTimeout(() => {
      this.router.navigateByUrl('/home')
    }, 1500);
  }


}
