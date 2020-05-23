import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverHomepagePage } from './driver-homepage.page';

describe('DriverHomepagePage', () => {
  let component: DriverHomepagePage;
  let fixture: ComponentFixture<DriverHomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverHomepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverHomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
