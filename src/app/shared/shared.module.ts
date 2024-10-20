import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

@NgModule({
  declarations: [HeaderComponent, ContentWrapperComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, ContentWrapperComponent],
})
export class SharedModule {}
