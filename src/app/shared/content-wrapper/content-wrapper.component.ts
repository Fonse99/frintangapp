import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss'],
})
export class ContentWrapperComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];
  @Input() pageTitle!: string;
  @Input() backButtonAction: () => void = this.goBack;

  constructor() {}
  ngOnInit() {}

  goBack() {
    history.back();
  }
}

export interface MenuItem {
  label: string;
  action: (_: unknown) => void;
}
