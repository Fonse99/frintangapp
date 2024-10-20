import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'p-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit, OnDestroy {
  @ViewChild('addOrderModal') modal!: IonModal;
  segment = new FormControl<'drink' | 'food' | 'dessert' | 'licor'>('food');

  orderList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  menuList = [1, 2, 3, 4, 5, 6];

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.modal.dismiss();
  }

  goBack() {
    history.back();
  }
}
