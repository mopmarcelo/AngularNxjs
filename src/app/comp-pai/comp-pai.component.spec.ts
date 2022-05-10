import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPaiComponent } from './comp-pai.component';

describe('CompPaiComponent', () => {
  let component: CompPaiComponent;
  let fixture: ComponentFixture<CompPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
