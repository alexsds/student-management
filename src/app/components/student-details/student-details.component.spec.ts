import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StudentDetailsComponent} from './student-details.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {StudentsStore} from '../../mobx-store/students.store';
import {DataService} from '../../core/service/data.service';
import {FiltersStore} from '../../mobx-store/filters.store';

describe('StudentDetailsComponent', () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentDetailsComponent],
      providers: [DataService, FiltersStore, StudentsStore],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
