import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StudentCardComponent} from './student-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {StudentsStore} from '../../stores/students.store';
import {DataService} from '../../core/service/data.service';
import {FiltersStore} from '../../stores/filters.store';

describe('StudentCardComponent', () => {
  let component: StudentCardComponent;
  let fixture: ComponentFixture<StudentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentCardComponent],
      providers: [DataService, FiltersStore, StudentsStore],
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
