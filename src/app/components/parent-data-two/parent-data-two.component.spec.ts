import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDataTwoComponent } from './parent-data-two.component';

describe('ParentDataTwoComponent', () => {
  let component: ParentDataTwoComponent;
  let fixture: ComponentFixture<ParentDataTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentDataTwoComponent]
    });
    fixture = TestBed.createComponent(ParentDataTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
