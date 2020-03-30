import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAvesComponent } from './new-aves.component';

describe('NewAvesComponent', () => {
  let component: NewAvesComponent;
  let fixture: ComponentFixture<NewAvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
