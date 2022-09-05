import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path:'menu',
    loadChildren:() => import('./pages/tabs-menu/tabs-menu.module').then(m=> m.TabsMenuPageModule)
  },
  {
    path: 'creation-dons',
    loadChildren: () => import('./pages/creation/creation-dons/creation-dons.module').then( m => m.CreationDonsPageModule)
  },
  {
    path: 'creation-demandes',
    loadChildren: () => import('./pages/creation/creation-demandes/creation-demandes.module').then( m => m.CreationDemandesPageModule)
  },
  {
    path: 'profil-donateur/:id',
    loadChildren: () => import('./pages/profils/profil-donateur/profil-donateur.module').then( m => m.ProfilDonateurPageModule)
  },
  {
    path: 'profil-association/:id',
    loadChildren: () => import('./pages/profils/profil-association/profil-association.module').then( m => m.ProfilAssociationPageModule)
  },
  {
    path: 'reception',
    loadChildren: () => import('./pages/messages/reception/reception.module').then( m => m.ReceptionPageModule)
  },
  {
    path: 'modal-etat',
    loadChildren: () => import('./modals/modal-etat/modal-etat.module').then( m => m.ModalEtatPageModule)
  },
  {
    path: 'settings/:id',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'salon/:id_donateur/:id_receiver/:id_demande/:id_don',
    loadChildren: () => import('./pages/messages/salon/salon.module').then( m => m.SalonPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers:[],
  exports: [RouterModule]
})
export class AppRoutingModule {}
