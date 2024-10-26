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
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
export class LoginComponent implements OnInit {
  router = inject(Router);

  constructor() {}

  ngOnInit() {}

  onPassRecovery() {
    this.router.navigate(['auth/password-recovery']);
  }

  onLogin() {
    this.router.navigate(['home']);
  }
}
