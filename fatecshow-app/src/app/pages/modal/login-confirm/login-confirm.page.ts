import { Component, OnInit } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login-confirm',
  templateUrl: './login-confirm.page.html',
  styleUrls: ['./login-confirm.page.scss'],
})
export class LoginConfirmPage implements OnInit {
  lottieConfig: any;

  constructor(
    private modalController: ModalController
  ) {
    LottieAnimationViewModule.forRoot();

    this.lottieConfig =  {
      path: 'assets/animations/wait.json',
      autoplay: true,
      loop: false
    };
   }

  ngOnInit() {
    setTimeout(() => {
      this.modalController.dismiss();
    }, 2700);
  }

}
