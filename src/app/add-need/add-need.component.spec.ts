import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeedComponent } from './add-need.component';

describe('AddNeedComponent', () => {
  let component: AddNeedComponent;
  let fixture: ComponentFixture<AddNeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
