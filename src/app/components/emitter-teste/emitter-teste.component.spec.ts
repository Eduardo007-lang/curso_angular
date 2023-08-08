import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterTesteComponent } from './emitter-teste.component';

describe('EmitterTesteComponent', () => {
  let component: EmitterTesteComponent;
  let fixture: ComponentFixture<EmitterTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmitterTesteComponent]
    });
    fixture = TestBed.createComponent(EmitterTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
