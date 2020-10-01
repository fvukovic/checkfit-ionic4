import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StreetPickerPage } from './street-picker.page';

describe('StreetPickerPage', () => {
  let component: StreetPickerPage;
  let fixture: ComponentFixture<StreetPickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetPickerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StreetPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
