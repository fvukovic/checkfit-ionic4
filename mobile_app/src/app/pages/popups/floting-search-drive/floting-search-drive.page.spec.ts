import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlotingSearchDrivePage } from './floting-search-drive.page';

describe('FlotingSearchDrivePage', () => {
  let component: FlotingSearchDrivePage;
  let fixture: ComponentFixture<FlotingSearchDrivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlotingSearchDrivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlotingSearchDrivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
