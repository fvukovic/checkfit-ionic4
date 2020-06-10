import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TaximuraTestModule } from '../../../test.module';
import { UserRelComponent } from 'app/entities/user-rel/user-rel.component';
import { UserRelService } from 'app/entities/user-rel/user-rel.service';
import { UserRel } from 'app/shared/model/user-rel.model';

describe('Component Tests', () => {
  describe('UserRel Management Component', () => {
    let comp: UserRelComponent;
    let fixture: ComponentFixture<UserRelComponent>;
    let service: UserRelService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TaximuraTestModule],
        declarations: [UserRelComponent],
      })
        .overrideTemplate(UserRelComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(UserRelComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(UserRelService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new UserRel(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.userRels && comp.userRels[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
