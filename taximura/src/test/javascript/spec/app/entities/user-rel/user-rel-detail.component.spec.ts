import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TaximuraTestModule } from '../../../test.module';
import { UserRelDetailComponent } from 'app/entities/user-rel/user-rel-detail.component';
import { UserRel } from 'app/shared/model/user-rel.model';

describe('Component Tests', () => {
  describe('UserRel Management Detail Component', () => {
    let comp: UserRelDetailComponent;
    let fixture: ComponentFixture<UserRelDetailComponent>;
    const route = ({ data: of({ userRel: new UserRel(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TaximuraTestModule],
        declarations: [UserRelDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(UserRelDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(UserRelDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load userRel on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.userRel).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
