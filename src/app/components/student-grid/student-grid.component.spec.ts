import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StudentGridComponent} from './student-grid.component';
import {provideMockStore} from '@ngrx/store/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('StudentGridComponent', () => {
  let component: StudentGridComponent;
  let fixture: ComponentFixture<StudentGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentGridComponent],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
