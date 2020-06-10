import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IUserRel } from 'app/shared/model/user-rel.model';
import { UserRelService } from './user-rel.service';
import { UserRelDeleteDialogComponent } from './user-rel-delete-dialog.component';

@Component({
  selector: 'jhi-user-rel',
  templateUrl: './user-rel.component.html',
})
export class UserRelComponent implements OnInit, OnDestroy {
  userRels?: IUserRel[];
  eventSubscriber?: Subscription;

  constructor(protected userRelService: UserRelService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.userRelService.query().subscribe((res: HttpResponse<IUserRel[]>) => (this.userRels = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInUserRels();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IUserRel): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInUserRels(): void {
    this.eventSubscriber = this.eventManager.subscribe('userRelListModification', () => this.loadAll());
  }

  delete(userRel: IUserRel): void {
    const modalRef = this.modalService.open(UserRelDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.userRel = userRel;
  }
}
