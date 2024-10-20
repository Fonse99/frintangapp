import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersPage } from './orders.page';
import { NewOrderComponent } from './new-order/new-order.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersPage,
  },
  {
    path: 'new-order',
    component: NewOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPageRoutingModule {}
