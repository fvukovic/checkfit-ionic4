import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { TaximuraTestModule } from '../../../test.module';
import { UserRelUpdateComponent } from 'app/entities/user-rel/user-rel-update.component';
import { UserRelService } from 'app/entities/user-rel/user-rel.service';
import { UserRel } from 'app/shared/model/user-rel.model';

describe('Component Tests', () => {
  describe('UserRel Management Update Component', () => {
    let comp: UserRelUpdateComponent;
    let fixture: ComponentFixture<UserRelUpdateComponent>;
    let service: UserRelService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TaximuraTestModule],
        declarations: [UserRelUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(UserRelUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(UserRelUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(UserRelService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new UserRel(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new UserRel();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
