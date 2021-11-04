import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/models/filter.model';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filter: Filter = { term: '' }
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSetFilter() {
    this.contactService.setFilter({ ...this.filter })
  }

}
