import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchRidePage } from './search-ride.page';

describe('SearchRidePage', () => {
  let component: SearchRidePage;
  let fixture: ComponentFixture<SearchRidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
