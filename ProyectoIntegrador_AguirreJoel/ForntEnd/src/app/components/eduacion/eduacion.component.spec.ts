import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduacionComponent } from './eduacion.component';

describe('EduacionComponent', () => {
  let component: EduacionComponent;
  let fixture: ComponentFixture<EduacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EduacionComponent]
    });
    fixture = TestBed.createComponent(EduacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
