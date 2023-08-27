import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './auth.guard';
import { FormComponent } from './auth/form/form.component';

const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'lobby',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./user-zone/lobby/lobby.module').then(m => m.LobbyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
