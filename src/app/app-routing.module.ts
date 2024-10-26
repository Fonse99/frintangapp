import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'pos',
    loadChildren: () => import('./modules/pos/pos.module').then( m => m.PosPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./modules/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./modules/billing/billing.module').then( m => m.BillingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
