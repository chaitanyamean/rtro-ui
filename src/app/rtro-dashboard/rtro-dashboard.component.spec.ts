import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtroDashboardComponent } from './rtro-dashboard.component';

describe('RtroDashboardComponent', () => {
  let component: RtroDashboardComponent;
  let fixture: ComponentFixture<RtroDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtroDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtroDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
