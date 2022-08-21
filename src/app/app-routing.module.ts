import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'favorite',
    loadChildren: () => import('./pages/favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'detail-poke',
    loadChildren: () => import('./pages/detail-poke/detail-poke.module').then( m => m.DetailPokePageModule)
  },
  {
    path: 'type-poke',
    loadChildren: () => import('./pages/type-poke/type-poke.module').then( m => m.TypePokePageModule)
  },
  {
    path: 'detail-type-of-poke',
    loadChildren: () => import('./pages/detail-type-of-poke/detail-type-of-poke.module').then( m => m.DetailTypeOfPokePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
