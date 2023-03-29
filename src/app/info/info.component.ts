import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  isInfo = false;
  infos = [
    {
      number: 1,
      name: '尤迪安',
      sex: '男',
      age: 30,
      country: '中国',
      email: 'loong@163.com',
      tel: '86-139-8765-4321',
      address: '广东省深圳市南山区桃园路5号',
    },
    {
      number: 2,
      name: 'Jarry',
      sex: '女',
      age: 24,
      country: '美国',
      email: 'jarry@gmail.com',
      tel: '1-222-333-4444',
      address: '3050 Bowers Avenue, P.O. Box 58039, Santa Clara, CA',
    },
    {
      number: 3,
      name: 'コナン',
      sex: '男',
      age: 17,
      country: '日本',
      email: 'conan@yahoo.com.co.jp',
      tel: '0081-8034125678',
      address: '东京都米花町2丁目21番地',
    },
  ];

  ngOnInit() {
    if (this.infos.length) {
      this.isInfo = false;
    } else {
      this.isInfo = true;
    }
  }
}
