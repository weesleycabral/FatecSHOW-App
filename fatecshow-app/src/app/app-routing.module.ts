import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/user/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // tslint:disable-next-line: max-line-length
  { path: 'login-confirm', loadChildren: () => import('./pages/modal/login-confirm/login-confirm.module').then(m => m.LoginConfirmPageModule) },
  {
    path: 'horarios',
    loadChildren: () => import('./pages/horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./pages/modal/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'faltas',
    loadChildren: () => import('./pages/faltas/faltas.module').then( m => m.FaltasPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
