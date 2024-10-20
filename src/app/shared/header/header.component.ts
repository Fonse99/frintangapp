import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'FritangApp';
  @Input() icon: string = 'heart-circle';

  constructor() {}

  ngOnInit() {}
}
