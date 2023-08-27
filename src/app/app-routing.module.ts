import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './auth.guard';
import { FormComponent } from './auth/form/form.component';
import { WrongPathComponent } from './wrong-path/wrong-path.component';

const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'lobby',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./user-zone/lobby/lobby.module').then(m => m.LobbyModule)
  },
  { path: '**', component: WrongPathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
