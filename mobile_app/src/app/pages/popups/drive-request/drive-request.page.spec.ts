import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriveRequestPage } from './drive-request.page';

describe('DriveRequestPage', () => {
  let component: DriveRequestPage;
  let fixture: ComponentFixture<DriveRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriveRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
