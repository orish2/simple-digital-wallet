import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/services/contact.service';


@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {

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

