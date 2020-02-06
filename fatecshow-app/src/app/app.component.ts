import { Component } from '@angular/core';

import { Platform, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  appPages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: '../assets/icon/HOME.png',
      disabled: false
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async alertLogout() {
    const alert = await this.alertController.create({
      header: 'Fatec SHOW!',
      message: 'Deseja desconectar da sua conta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  logout() {
    this.router.navigate(['/login']);
    this.presentToast('Desconectado com sucesso! Volte sempre! :D', 'success');
  }

  async presentToast(m: string, c: string) {
    const toast = await this.toastController.create({
      message: `${m}`,
      color: `${c}`,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
