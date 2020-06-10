import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IDrive, Drive } from 'app/shared/model/drive.model';
import { DriveService } from './drive.service';
import { DriveComponent } from './drive.component';
import { DriveDetailComponent } from './drive-detail.component';
import { DriveUpdateComponent } from './drive-update.component';

@Injectable({ providedIn: 'root' })
export class DriveResolve implements Resolve<IDrive> {
  constructor(private service: DriveService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDrive> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((drive: HttpResponse<Drive>) => {
          if (drive.body) {
            return of(drive.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Drive());
  }
}

export const driveRoute: Routes = [
  {
    path: '',
    component: DriveComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'taximuraApp.drive.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: DriveDetailComponent,
    resolve: {
      drive: DriveResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'taximuraApp.drive.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: DriveUpdateComponent,
    resolve: {
      drive: DriveResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'taximuraApp.drive.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: DriveUpdateComponent,
    resolve: {
      drive: DriveResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'taximuraApp.drive.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
