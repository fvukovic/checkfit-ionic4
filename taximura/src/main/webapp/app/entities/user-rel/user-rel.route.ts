import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IUserRel, UserRel } from 'app/shared/model/user-rel.model';
import { UserRelService } from './user-rel.service';
import { UserRelComponent } from './user-rel.component';
import { UserRelDetailComponent } from './user-rel-detail.component';
import { UserRelUpdateComponent } from './user-rel-update.component';

@Injectable({ providedIn: 'root' })
export class UserRelResolve implements Resolve<IUserRel> {
  constructor(private service: UserRelService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUserRel> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((userRel: HttpResponse<UserRel>) => {
          if (userRel.body) {
            return of(userRel.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new UserRel());
  }
}

export const userRelRoute: Routes = [
  {
    path: '',
    component: UserRelComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'taximuraApp.userRel.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: UserRelDetailComponent,
    resolve: {
      userRel: UserRelResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'taximuraApp.userRel.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: UserRelUpdateComponent,
    resolve: {
      userRel: UserRelResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'taximuraApp.userRel.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: UserRelUpdateComponent,
    resolve: {
      userRel: UserRelResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'taximuraApp.userRel.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
