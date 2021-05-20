import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GridViewComponent} from './grid-view.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GridViewStore} from '../../stores/grid-view.store';
import {StudentsStore} from '../../stores/students.store';
import {DataService} from '../../core/service/data.service';
import {FiltersStore} from '../../stores/filters.store';

describe('GridViewComponent', () => {
  let component: GridViewComponent;
  let fixture: ComponentFixture<GridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridViewComponent],
      providers: [DataService, FiltersStore, GridViewStore, StudentsStore],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
