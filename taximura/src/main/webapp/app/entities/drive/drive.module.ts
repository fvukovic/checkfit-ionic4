import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaximuraSharedModule } from 'app/shared/shared.module';
import { DriveComponent } from './drive.component';
import { DriveDetailComponent } from './drive-detail.component';
import { DriveUpdateComponent } from './drive-update.component';
import { DriveDeleteDialogComponent } from './drive-delete-dialog.component';
import { driveRoute } from './drive.route';

@NgModule({
  imports: [TaximuraSharedModule, RouterModule.forChild(driveRoute)],
  declarations: [DriveComponent, DriveDetailComponent, DriveUpdateComponent, DriveDeleteDialogComponent],
  entryComponents: [DriveDeleteDialogComponent],
})
export class TaximuraDriveModule {}
