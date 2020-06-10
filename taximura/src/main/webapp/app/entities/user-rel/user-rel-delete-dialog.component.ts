import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IUserRel } from 'app/shared/model/user-rel.model';
import { UserRelService } from './user-rel.service';

@Component({
  templateUrl: './user-rel-delete-dialog.component.html',
})
export class UserRelDeleteDialogComponent {
  userRel?: IUserRel;

  constructor(protected userRelService: UserRelService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.userRelService.delete(id).subscribe(() => {
      this.eventManager.broadcast('userRelListModification');
      this.activeModal.close();
    });
  }
}
