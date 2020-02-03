import { Component } from '@angular/core';
import { FatecService } from '../services/fatec.service';
import { User } from '../model/User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: User;
  constructor(
    private fatecService: FatecService
  ) {
    this.fatecService.getUser().subscribe((res: User) => {
      this.usuario = res;
      this.usuario.name = this.usuario.name.replace('-', '');
    });
  }

}
