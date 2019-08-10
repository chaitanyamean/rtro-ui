import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileViewJobListComponent } from './mobile-view-job-list.component';

describe('MobileViewJobListComponent', () => {
  let component: MobileViewJobListComponent;
  let fixture: ComponentFixture<MobileViewJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileViewJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileViewJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
