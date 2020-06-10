import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IUserRel, UserRel } from 'app/shared/model/user-rel.model';
import { UserRelService } from './user-rel.service';

@Component({
  selector: 'jhi-user-rel-update',
  templateUrl: './user-rel-update.component.html',
})
export class UserRelUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    user: [],
  });

  constructor(protected userRelService: UserRelService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ userRel }) => {
      this.updateForm(userRel);
    });
  }

  updateForm(userRel: IUserRel): void {
    this.editForm.patchValue({
      id: userRel.id,
      user: userRel.user,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const userRel = this.createFromForm();
    if (userRel.id !== undefined) {
      this.subscribeToSaveResponse(this.userRelService.update(userRel));
    } else {
      this.subscribeToSaveResponse(this.userRelService.create(userRel));
    }
  }

  private createFromForm(): IUserRel {
    return {
      ...new UserRel(),
      id: this.editForm.get(['id'])!.value,
      user: this.editForm.get(['user'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IUserRel>>): void {
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
}
