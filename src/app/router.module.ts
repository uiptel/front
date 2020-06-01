import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/topup', pathMatch: 'full' },
  { path: 'topup', component: MenuComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
