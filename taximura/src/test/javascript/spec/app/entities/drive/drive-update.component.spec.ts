import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { TaximuraTestModule } from '../../../test.module';
import { DriveUpdateComponent } from 'app/entities/drive/drive-update.component';
import { DriveService } from 'app/entities/drive/drive.service';
import { Drive } from 'app/shared/model/drive.model';

describe('Component Tests', () => {
  describe('Drive Management Update Component', () => {
    let comp: DriveUpdateComponent;
    let fixture: ComponentFixture<DriveUpdateComponent>;
    let service: DriveService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TaximuraTestModule],
        declarations: [DriveUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DriveUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DriveUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DriveService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Drive(123);
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
        const entity = new Drive();
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
