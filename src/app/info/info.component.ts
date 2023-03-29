import { Component } from '@angular/core';
import { InfoService } from './info.service';

interface InfoType {
  number: string;
  name: string;
  sex: string;
  age: string;
  country: string;
  email: string;
  tel: string;
  address: string;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  isInfo = false;
  infos: InfoType[] = [];

  constructor(private service: InfoService) {}

  private getInfo() {
    this.service.getInfo().subscribe((res) => {
      console.info(res);
      if ((res as any).code === 200) {
        this.infos = (res as any).data as InfoType[];
      }
      this.isInfoFun();
    });
  }

  isInfoFun() {
    if (this.infos.length) {
      this.isInfo = false;
    } else {
      this.isInfo = true;
    }
  }

  ngOnInit() {
    this.getInfo();
  }
}
