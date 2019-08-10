import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljobsListComponent } from './alljobs-list.component';

describe('AlljobsListComponent', () => {
  let component: AlljobsListComponent;
  let fixture: ComponentFixture<AlljobsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlljobsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlljobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
