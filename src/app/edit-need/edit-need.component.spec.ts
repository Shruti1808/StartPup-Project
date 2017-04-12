import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNeedComponent } from './edit-need.component';

describe('EditNeedComponent', () => {
  let component: EditNeedComponent;
  let fixture: ComponentFixture<EditNeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
