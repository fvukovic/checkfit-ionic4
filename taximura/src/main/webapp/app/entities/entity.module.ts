import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'drive',
        loadChildren: () => import('./drive/drive.module').then(m => m.TaximuraDriveModule),
      },
      {
        path: 'price',
        loadChildren: () => import('./price/price.module').then(m => m.TaximuraPriceModule),
      },
      {
        path: 'user-rel',
        loadChildren: () => import('./user-rel/user-rel.module').then(m => m.TaximuraUserRelModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class TaximuraEntityModule {}
