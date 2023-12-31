import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LottieAnimationViewModule } from 'ng-lottie';

import { IonicModule } from '@ionic/angular';

import { LoginConfirmPageRoutingModule } from './login-confirm-routing.module';

import { LoginConfirmPage } from './login-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottieAnimationViewModule,
    LoginConfirmPageRoutingModule
  ],
  declarations: [LoginConfirmPage]
})
export class LoginConfirmPageModule {}
