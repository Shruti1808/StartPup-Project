import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSocialmediaComponent } from './new-socialmedia.component';

describe('NewSocialmediaComponent', () => {
  let component: NewSocialmediaComponent;
  let fixture: ComponentFixture<NewSocialmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSocialmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
