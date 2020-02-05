import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LottieAnimationViewModule } from 'ng-lottie';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginConfirmPageModule } from './pages/modal/login-confirm/login-confirm.module';
import { HomePageModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { HorariosPageModule } from './pages/horarios/horarios.module';
import { MateriasPageModule } from './pages/modal/materias/materias.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      LottieAnimationViewModule,
      LoginConfirmPageModule,
      HomePageModule,
      HorariosPageModule,
      MateriasPageModule,
      HttpClientModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
