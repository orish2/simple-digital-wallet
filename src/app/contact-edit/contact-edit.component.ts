import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/services/contact.service';
@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contact: Contact
  subscription: Subscription
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = { ...data.contact }

    })

  }

  ngAfterViewInit() {
  }
  onSubmitContactDetails(form: NgForm) {
    this.contactService.saveContact(this.contact)
    console.log('redirecting');
    setTimeout(() => {
      this.router.navigateByUrl('/contact')
    }, 1500);
  }
}
