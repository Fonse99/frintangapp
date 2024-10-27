import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonPopover, PopoverController } from '@ionic/angular';
import { FilterComponent } from './components/filter/filter.component';

@Component({
  selector: 'p-pos',
  templateUrl: './pos.page.html',
  styleUrls: ['./pos.page.scss'],
})
export class PosPage implements OnInit, OnDestroy {
  @ViewChild('modal') modal!: IonModal;
  popover = inject(PopoverController);

  plates = MOCK_PLATILLOS;

  constructor() {}
  ngOnDestroy(): void {
    this.modal.dismiss();
  }

  ngOnInit() {}

  goBack() {
    history.back();
  }

  async openFilterPopover(e: Event) {
    const filterPopover = await this.popover.create({
      component: FilterComponent,
    });

    filterPopover.present(e as MouseEvent);

    const { data } = await filterPopover.onDidDismiss();

    console.log(data);
  }

  async openInvoice() {
    await this.modal.present();
  }
}

export const MOCK_PLATILLOS = [
  {
    name: 'Taco en Salsa Ranch',
    stock: 10,
    price: 50.0,
    image:
      'https://static.vecteezy.com/system/resources/previews/026/773/883/non_2x/enchiladas-with-ai-generated-free-png.png',
  },
  {
    name: 'Quesillo',
    stock: 15,
    price: 30.0,
    image:
      'https://apetitocatracho.wordpress.com/wp-content/uploads/2017/08/adbdf-12804794_753179528116882_5864377521752550850_n.jpg',
  },
  {
    name: 'Gallo Pinto',
    stock: 20,
    price: 40.0,
    image:
      'https://cdn0.recetasgratis.net/es/posts/6/6/7/gallo_pinto_76766_orig.jpg',
  },
  {
    name: 'Nacatamal',
    stock: 8,
    price: 45.0,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudXAgIsNd0IRx6I7eWo2TnSvbW4P_vCZeIw&s',
  },
  {
    name: 'Sopa de Mondongo',
    stock: 5,
    price: 60.0,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN78z_THr1zvyxt05HlPX4MTf9hI_bzlHPWQ&s',
  },
];
