import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillingPageRoutingModule } from './billing-routing.module';

import { BillingPage } from './billing.page';
import { BarcodeScannerComponent } from 'src/app/components/barcode-scanner/barcode-scanner.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BillingPageRoutingModule],
  declarations: [BillingPage, BarcodeScannerComponent],
})
export class BillingPageModule {}
