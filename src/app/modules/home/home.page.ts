import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  routing = routing;

  constructor() {}

  ngOnInit() {}
}

const routing = [
  {
    title: 'Órdenes',
    route: '/orders',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit minus dolores sapiente cum aperiam et iste est eum
              accusantium sequi quo, voluptate neque! Eligendi!`,
  },
  {
    title: 'Facturación',
    route: '/pos',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit minus dolores sapiente cum aperiam et iste est eum
              accusantium sequi quo, voluptate neque! Eligendi!`,
  },
  {
    title: 'Inventario',
    route: '/inventory',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit minus dolores sapiente cum aperiam et iste est eum
              accusantium sequi quo, voluptate neque! Eligendi!`,
  },
  {
    title: 'Reportes',
    route: '/billing',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit minus dolores sapiente cum aperiam et iste est eum
              accusantium sequi quo, voluptate neque! Eligendi!`,
  },
];
