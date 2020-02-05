import { Component, OnInit } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';
import { ModalController } from '@ionic/angular';
import { MateriasPage } from '../modal/materias/materias.page';
import { FatecService } from 'src/app/services/fatec.service';
import { Horarios } from 'src/app/models/Horarios';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {
lottieConfig: any;
horarios: Horarios;

  constructor(
    private modalController: ModalController,
    private fatecService: FatecService
  ) {
    LottieAnimationViewModule.forRoot();

    this.lottieConfig = {
      path: 'assets/animations/calendar2.json',
      autoplay: true,
      loop: true,
    };
   }

  ngOnInit() {
    this.fatecService.getHorarios().subscribe((res: Horarios) => {
      this.horarios = res;
      console.log(this.horarios);
    });
  }

  async presentModal(index) {
    const modal = await this.modalController.create({
      component: MateriasPage,
      componentProps: {
        weekday: this.horarios[index],
      }
    });
    return await modal.present();
  }

}
