import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[]
  @Output() onShow = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onShowingDetails(id: string) {
    this.onShow.emit(id)
  }
}
