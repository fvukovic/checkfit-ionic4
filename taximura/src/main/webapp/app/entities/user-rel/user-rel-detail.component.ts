import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUserRel } from 'app/shared/model/user-rel.model';

@Component({
  selector: 'jhi-user-rel-detail',
  templateUrl: './user-rel-detail.component.html',
})
export class UserRelDetailComponent implements OnInit {
  userRel: IUserRel | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ userRel }) => (this.userRel = userRel));
  }

  previousState(): void {
    window.history.back();
  }
}
