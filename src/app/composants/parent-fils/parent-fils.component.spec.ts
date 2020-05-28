import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFilsComponent } from './parent-fils.component';

describe('ParentFilsComponent', () => {
  let component: ParentFilsComponent;
  let fixture: ComponentFixture<ParentFilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
