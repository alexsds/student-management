import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StudentGridComponent} from './student-grid.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {StudentsStore} from '../../mobx-store/students.store';
import {DataService} from '../../core/service/data.service';
import {FiltersStore} from '../../mobx-store/filters.store';

describe('StudentGridComponent', () => {
  let component: StudentGridComponent;
  let fixture: ComponentFixture<StudentGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentGridComponent],
      providers: [DataService, FiltersStore, StudentsStore],
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
