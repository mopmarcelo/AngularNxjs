import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFilhoComponent } from './comp-filho.component';

describe('CompFilhoComponent', () => {
  let component: CompFilhoComponent;
  let fixture: ComponentFixture<CompFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
