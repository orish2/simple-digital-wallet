import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'bitcoin-app',
  templateUrl: './bitcoin-app.component.html',
  styleUrls: ['./bitcoin-app.component.scss']
})
export class BitcoinAppComponent implements OnInit {

  contacts$: Observable<Contact[]>
  // selectedContact = false;
  selectedContactId: string;
  constructor(private contactService: ContactService) {

  }
  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
    // console.log('contacts', this.contacts$);
  }

  handleShow(id: string) {
    // this.selectedContact = true;
    this.selectedContactId = id
  }

}
