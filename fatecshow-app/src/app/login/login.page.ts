import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { ModalController } from '@ionic/angular';
import { LoginConfirmPage } from '../modal/login-confirm/login-confirm.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  mostrarLogin = false;
  senhaLogin: string;
  mantermeConectado = false;

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.validation();
  }

  validation() {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  mostrarSenhaLogin() {
    if (this.mostrarLogin === false) {
      // $('#senha2').get(0).value = $('#senha').get(0).value;
      $('#senhaLogin').addClass('ion-hide');
      $('#senha2Login').removeClass('ion-hide');

    } else {
      // $('#senha').get(0).value = $('#senha2').get(0).value;
      $('#senhaLogin').removeClass('ion-hide');
      $('#senha2Login').addClass('ion-hide');

    }
    this.mostrarLogin = !this.mostrarLogin;
  }

  manterConectado(event) {
    this.mantermeConectado = event.detail.checked;
  }

  login() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginConfirmPage,
    });
    return await modal.present();
  }

}
