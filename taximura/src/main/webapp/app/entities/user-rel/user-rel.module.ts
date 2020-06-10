import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaximuraSharedModule } from 'app/shared/shared.module';
import { UserRelComponent } from './user-rel.component';
import { UserRelDetailComponent } from './user-rel-detail.component';
import { UserRelUpdateComponent } from './user-rel-update.component';
import { UserRelDeleteDialogComponent } from './user-rel-delete-dialog.component';
import { userRelRoute } from './user-rel.route';

@NgModule({
  imports: [TaximuraSharedModule, RouterModule.forChild(userRelRoute)],
  declarations: [UserRelComponent, UserRelDetailComponent, UserRelUpdateComponent, UserRelDeleteDialogComponent],
  entryComponents: [UserRelDeleteDialogComponent],
})
export class TaximuraUserRelModule {}
