import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireBuilderComponent } from './formulaire-builder.component';

describe('FormulaireBuilderComponent', () => {
  let component: FormulaireBuilderComponent;
  let fixture: ComponentFixture<FormulaireBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
