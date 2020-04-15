import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerHomepagePage } from './customer-homepage.page';

describe('CustomerHomepagePage', () => {
  let component: CustomerHomepagePage;
  let fixture: ComponentFixture<CustomerHomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHomepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerHomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
