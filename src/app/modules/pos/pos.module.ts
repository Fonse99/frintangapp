import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosPageRoutingModule } from './pos-routing.module';

import { PosPage } from './pos.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosPageRoutingModule,
    SharedModule,
  ],
  declarations: [PosPage],
})
export class PosPageModule {}
