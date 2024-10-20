import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import { SharedModule } from '../../shared/shared.module';
import { NewOrderComponent } from './new-order/new-order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OrdersPageRoutingModule,
    SharedModule,
  ],
  declarations: [OrdersPage, NewOrderComponent],
})
export class OrdersPageModule {}
