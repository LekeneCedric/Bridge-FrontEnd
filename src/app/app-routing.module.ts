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
    path: 'creation-association',
    loadChildren: () => import('./pages/creation/creation-association/creation-association.module').then( m => m.CreationAssociationPageModule)
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
  {
    path: 'receptions',
    loadChildren: () => import('./pages/messages/receptions/receptions.module').then( m => m.ReceptionsPageModule)
  },
  {
    path: 'modal-salon',
    loadChildren: () => import('./modals/modal-salon/modal-salon.module').then( m => m.ModalSalonPageModule)
  },
  {
    path: 'modal-popover',
    loadChildren: () => import('./modals/modal-popover/modal-popover.module').then( m => m.ModalPopoverPageModule)
  },
  {
    path: 'modal-edit-profil',
    loadChildren: () => import('./modals/modal-edit-profil/modal-edit-profil.module').then( m => m.ModalEditProfilPageModule)
  },
  {
    path: 'modal-edit-dons',
    loadChildren: () => import('./modals/modal-edit-dons/modal-edit-dons.module').then( m => m.ModalEditDonsPageModule)
  },
  {
    path: 'map/:category/:id',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'details-association/:id',
    loadChildren: () => import('./pages/details/details-association/details-association.module').then( m => m.DetailsAssociationPageModule)
  },
  {
    path: 'modal-mouvements',
    loadChildren: () => import('./modals/modal-mouvements/modal-mouvements.module').then( m => m.ModalMouvementsPageModule)
  },
  {
    path: 'modal-annonces',
    loadChildren: () => import('./modals/modal-annonces/modal-annonces.module').then( m => m.ModalAnnoncesPageModule)
  },
  {
    path: 'modal-demandes-adhesion-association',
    loadChildren: () => import('./modals/modal-demandes-adhesion-association/modal-demandes-adhesion-association.module').then( m => m.ModalDemandesAdhesionAssociationPageModule)
  },
  {
    path: 'creation-annonces/:id_association',
    loadChildren: () => import('./pages/creation/creation-annonces/creation-annonces.module').then( m => m.CreationAnnoncesPageModule)
  },
  {
    path: 'creation-besoins/:id_association',
    loadChildren: () => import('./pages/creation/creation-besoins/creation-besoins.module').then( m => m.CreationBesoinsPageModule)
  },
  {
    path: 'creation-mouvements/:id_association',
    loadChildren: () => import('./pages/creation/creation-mouvements/creation-mouvements.module').then( m => m.CreationMouvementsPageModule)
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
