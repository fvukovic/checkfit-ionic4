import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDrive } from 'app/shared/model/drive.model';
import { DriveService } from './drive.service';

@Component({
  templateUrl: './drive-delete-dialog.component.html',
})
export class DriveDeleteDialogComponent {
  drive?: IDrive;

  constructor(protected driveService: DriveService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.driveService.delete(id).subscribe(() => {
      this.eventManager.broadcast('driveListModification');
      this.activeModal.close();
    });
  }
}
