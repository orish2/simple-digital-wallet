import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/models/contact.model';
import { Message } from 'src/models/message.model';
import { ContactService } from 'src/services/contact.service';
import { UserMsgService } from 'src/services/user-msg.service';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact: Contact
  @Output() onShowingContactDetails = new EventEmitter<string>()
  deleteContact = false;
  constructor(private router: Router, private contactService: ContactService,
    private userMessage: UserMsgService) {
  }

  ngOnInit(): void {
  }

  onContactClicked(ev: MouseEvent) {
    this.onShowingContactDetails.emit(this.contact._id)
    this.contactService.resetFilter()
  }

  goToDetails() {
    this.router.navigateByUrl(`/contact/${this.contact._id}`)
    this.contactService.resetFilter()
  }

  goToEdit() {
    this.router.navigateByUrl(`/contact/edit/${this.contact._id}`)
    this.contactService.resetFilter()
  }

  delete() {
    this.deleteContact = false;
    this.contactService.deleteContact(this.contact._id)
    this.contactService.resetFilter()
    this.userMessage.showMsg({
      msg: `${this.contact.name} contact has been deleted successfully`, className: 'success'
    } as Message)

  }
  abort() {
    this.deleteContact = false;
  }
  onDeleteContact(evt: MouseEvent) {
    // evt.stopPropagation()
    this.deleteContact = true
  }
}
