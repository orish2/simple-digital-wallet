import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact: Contact
  @Output() onShowingContactDetails = new EventEmitter<string>()
  constructor(private router: Router, private contactService: ContactService) {
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
  onDeleteContact() {
    this.contactService.deleteContact(this.contact._id)
    this.contactService.resetFilter()
  }
}
