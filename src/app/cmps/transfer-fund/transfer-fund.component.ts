import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Output() onTransfer = new EventEmitter<number>()
  constructor() { }
  amount: number;
  ngOnInit(): void {
  }

  transferFund() {
    this.onTransfer.emit(this.amount)
    this.amount = 0
  }

}
