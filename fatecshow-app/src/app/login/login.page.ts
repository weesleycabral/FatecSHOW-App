import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { ModalController } from '@ionic/angular';
import { LoginConfirmPage } from '../modal/login-confirm/login-confirm.page';
import { FatecService } from '../services/fatec.service';
import { Router } from '@angular/router';

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
    private fatecService: FatecService,
    private router: Router
  ) { }

  ngOnInit() {
    this.validation();
  }

  validation() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
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
    if (this.loginForm.valid) {
      const conta = Object.assign(this.loginForm.value);
      this.fatecService.login(conta).subscribe((res) => {
        this.presentModal();
        this.router.navigate(['tabs/home']);
      }, e => {
        alert(e.error);
      });
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginConfirmPage,
    });
    return await modal.present();
  }

}
