import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  info: string = 'http://www.imooc.com';

  jumper(): void {
    window.location.href = 'http://www.imooc.com';
  }
}
