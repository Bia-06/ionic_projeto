import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./component/landing-page/landing-page.component').then(m => m.LandingPageComponent),
    pathMatch: 'full'
  },
  {
    path:'landing-page',
    loadComponent: () => import('./component/landing-page/landing-page.component').then(m => m.LandingPageComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./page/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./page/cadastro/cadastro.page').then(m => m.CadastroPage)
  },
  {
    path: 'detalhes/:id',
    loadComponent: () => import('./page/detalhes/detalhes.page').then(m => m.DetalhesPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./page/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'inicial',
        loadComponent: () => import('./page/tabs/inicial/inicial.page').then(m => m.InicialPage)
      },
      {
        path: 'perfil',
        loadComponent: () => import('./page/tabs/perfil/perfil.page').then(m => m.PerfilPage)
      },
      {
        path: '',
        redirectTo: 'inicial',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}