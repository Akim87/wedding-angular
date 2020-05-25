import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCoachesComponent } from './section-coaches.component';

describe('SectionCoachesComponent', () => {
  let component: SectionCoachesComponent;
  let fixture: ComponentFixture<SectionCoachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCoachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
