import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links = [
    {
      sref: '/info',
      name: '信息展示(ClientInfo)',
    },
    {
      sref: '/input',
      name: '信息录入(InfoInput)',
    },
  ];

  constructor(private route: Router) {}

  jumper(): void {
    this.route.navigate(['/input']);
  }
}
