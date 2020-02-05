import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FatecService } from 'src/app/services/fatec.service';
import { Disciplinas } from 'src/app/models/Disciplinas';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements AfterViewInit {

  materias: Disciplinas[] = [];
  teste: any[] = [];
  constructor(
    private navParams: NavParams,
    public modalController: ModalController,
    private fatecService: FatecService
  ) { }

  ngAfterViewInit() {
    const codigos = this.navParams.get('weekday');
    codigos.periods.forEach(element => {
      const c = element.discipline.code;
      this.materias.push(this.fatecService.disciplinas.find(x => x.code === c));
      const endAt = new Date(element.endAt);
      const startAt = new Date(element.startAt);
      endAt.setHours(endAt.getHours() - 1);
      startAt.setHours(startAt.getHours() - 1);

      const t = {
        nome: this.fatecService.disciplinas.find(x => x.code === c).name,
        endAt: endAt.toTimeString().substr(0, 5),
        startAt: startAt.toTimeString().substr(0, 5)
      };
      this.teste.push(t);
    });
  }

}
