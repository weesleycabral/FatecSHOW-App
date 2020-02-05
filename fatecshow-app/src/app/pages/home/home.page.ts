import { Component } from '@angular/core';
import { FatecService } from '../../services/fatec.service';
import { User } from 'src/app/models/User';
import { Notas } from 'src/app/models/Notas';
import { Disciplinas } from 'src/app/models/Disciplinas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: User;
  notas: Notas;
  disciplinas: Disciplinas;
  horarios: any;

  constructor(
    private fatecService: FatecService
  ) {
    this.fatecService.getUser().subscribe((res: User) => {
      this.usuario = res;
      this.usuario.name = this.usuario.name.replace('-', '');
      this.usuario.name = this.usuario.name.split(' ')[0];
      this.usuario.name = this.usuario.name.toLowerCase();
    });
    this.fatecService.getNotas().subscribe((res: Notas) => {
      this.notas = res;
    });
    this.fatecService.getDisciplinas().subscribe((res: Disciplinas) => {
      this.disciplinas = res;
    }); 
  }

}
