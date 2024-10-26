import {
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { IonPopover, ToastController } from '@ionic/angular';

@Component({
  selector: 'c-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() title: string = 'FritangApp';
  @Input() icon: string = 'heart-circle';
  @ViewChild('profileMenu') menu!: IonPopover;

  router = inject(Router);
  toastController = inject(ToastController);

  menuItems = [
    {
      label: 'Salud',
      icon: 'heart-outline',
      action: async () => {
        const toast = await this.toastController.create({
          header: 'Hola Mundo',
          position: 'bottom',
          duration: 3000,
        });

        toast.present();
      },
    },
    {
      label: 'Seguridad',
      icon: 'shield-outline',
      action: async () => {
        const toast = await this.toastController.create({
          header: 'Hola Mundo',
          position: 'bottom',
          duration: 3000,
        });

        toast.present();
      },
    },
    {
      label: 'Cuenta',
      icon: 'person-outline',
      action: async () => {
        const toast = await this.toastController.create({
          header: 'Hola Mundo',
          position: 'bottom',
          duration: 3000,
        });

        toast.present();
      },
    },
  ];
  constructor() {}

  ngOnDestroy(): void {
    this.menu.dismiss();
  }

  ngOnInit() {}

  logout() {
    this.router.navigate(['auth', 'login']);
  }
}
