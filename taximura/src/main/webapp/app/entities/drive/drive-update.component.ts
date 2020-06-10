import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IDrive, Drive } from 'app/shared/model/drive.model';
import { DriveService } from './drive.service';
import { IUserRel } from 'app/shared/model/user-rel.model';
import { UserRelService } from 'app/entities/user-rel/user-rel.service';

@Component({
  selector: 'jhi-drive-update',
  templateUrl: './drive-update.component.html',
})
export class DriveUpdateComponent implements OnInit {
  isSaving = false;
  userrels: IUserRel[] = [];

  editForm = this.fb.group({
    id: [],
    fromLat: [],
    fromLong: [],
    toLat: [],
    price: [],
    userRel: [],
    user: [],
  });

  constructor(
    protected driveService: DriveService,
    protected userRelService: UserRelService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ drive }) => {
      this.updateForm(drive);

      this.userRelService.query().subscribe((res: HttpResponse<IUserRel[]>) => (this.userrels = res.body || []));
    });
  }

  updateForm(drive: IDrive): void {
    this.editForm.patchValue({
      id: drive.id,
      fromLat: drive.fromLat,
      fromLong: drive.fromLong,
      toLat: drive.toLat,
      price: drive.price,
      userRel: drive.userRel,
      user: drive.user,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const drive = this.createFromForm();
    if (drive.id !== undefined) {
      this.subscribeToSaveResponse(this.driveService.update(drive));
    } else {
      this.subscribeToSaveResponse(this.driveService.create(drive));
    }
  }

  private createFromForm(): IDrive {
    return {
      ...new Drive(),
      id: this.editForm.get(['id'])!.value,
      fromLat: this.editForm.get(['fromLat'])!.value,
      fromLong: this.editForm.get(['fromLong'])!.value,
      toLat: this.editForm.get(['toLat'])!.value,
      price: this.editForm.get(['price'])!.value,
      userRel: this.editForm.get(['userRel'])!.value,
      user: this.editForm.get(['user'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDrive>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: IUserRel): any {
    return item.id;
  }
}
