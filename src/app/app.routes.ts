import { Routes } from "@angular/router";

export const AppRoutes:Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadChildren: ()=> import('./pages/login/login.module').then(x=>x.LoginModule)
  }
]
