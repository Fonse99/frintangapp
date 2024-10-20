import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonPopover } from '@ionic/angular';
import { ComponentProps } from '@ionic/core';

@Component({
  selector: 'p-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  @ViewChild('popoverMenu') menu!: IonPopover;
  private longPressTimeout: any;
  private router = inject(Router);

  menuItems: MenuItem[] = [];
  pageTitle: string = 'ÓRDENES';
  isMenuOpen = false;

  constructor() {}

  openMenuPopover(e: Event, id: number) {
    console.log(e);

    console.log(`el id seleccionado es: ${id}`);

    this.menu.event = e;

    this.menu.componentProps = {
      data: id,
    };
    this.isMenuOpen = true;
  }

  doSomethin(parentProps: ComponentProps | undefined) {
    console.log(`Datos del padre: ${parentProps?.['data']}`);
  }

  ngOnInit() {}

  goBack() {
    history.back();
  }

  // Método que se activa cuando el touchstart ocurre
  onTouchStart(event: Event, idx: number) {
    this.longPressTimeout = setTimeout(() => {
      // this.handleLongPress(idx);
      this.openMenuPopover(event, idx);
      console.log(event);
    }, 800);
  }

  // Método que se activa cuando el touchend ocurre
  onTouchEnd(event: Event, idx: number) {
    clearTimeout(this.longPressTimeout); // Si el usuario suelta antes del tiempo definido, se cancela el "long press"
  }

  addNewOrder() {
    this.router.navigate(['orders', 'new-order'])
  }
}

export interface MenuItem {
  label: string;
  action: (_: unknown) => void;
}
