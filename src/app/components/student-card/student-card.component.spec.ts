import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StudentCardComponent} from './student-card.component';
import {provideMockStore} from '@ngrx/store/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('StudentCardComponent', () => {
  let component: StudentCardComponent;
  let fixture: ComponentFixture<StudentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentCardComponent],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
