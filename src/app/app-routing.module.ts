import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'asortyment',
    loadChildren: () => import('./asortyment/asortyment.module').then( m => m.AsortymentPageModule)
  },
  {
    path: 'mniej-istotne',
    loadChildren: () => import('./mniej-istotne/mniej-istotne.module').then( m => m.MniejIstotnePageModule)
  },
  {
    path: 'zamowione',
    loadChildren: () => import('./zamowione/zamowione.module').then( m => m.ZamowionePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
