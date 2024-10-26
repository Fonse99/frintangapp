import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'c-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
  animations: [
    trigger('slideIn', [
      // Estado inicial fuera de la vista (derecha)
      state('void', style({ transform: 'translateX(100%)' })),
      // Estado final dentro de la vista (posición normal)
      state('*', style({ transform: 'translateX(0)' })),
      // Definimos la transición al iniciar
      transition('void => *', animate('500ms ease-in-out')),
    ]),
  ],
})
export class PasswordRecoveryComponent implements OnInit {
  router = inject(Router);

  constructor() {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['auth', 'login']);
  }
}
