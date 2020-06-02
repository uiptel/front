import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SalePointComponent } from './sale-point/sale-point.component';
import { SupportComponent } from './support/support.component';

const appRoutes: Routes = [
  { path: 'top-up', component: MenuComponent },
  { path: 'sale-point', component: SalePointComponent },
  { path: 'support', component: SupportComponent },
  { path: '', redirectTo: '/top-up', pathMatch: 'full' },
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
