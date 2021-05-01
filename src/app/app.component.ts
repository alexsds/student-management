import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Student} from './core/model/student';
import {Store} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as StudentsActions from './store/students/students.actions';
import {isPlatformBrowser} from '@angular/common';
import {getClassTypes, getSelectedStudent, getStudents, getYears} from './store/students/students.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'students-managment';

  years$: Observable<Set<number>>;
  classTypes$: Observable<Set<string>>;
  students$: Observable<Student[]>;
  selectedStudent$: Observable<Student | undefined>;

  constructor(private store: Store<fromApp.State>, @Inject(PLATFORM_ID) private platformId: object) {
    this.years$ = this.store.select(getYears);
    this.classTypes$ = this.store.select(getClassTypes);
    this.students$ = this.store.select(getStudents);
    this.selectedStudent$ = this.store.select(getSelectedStudent);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new StudentsActions.FetchData());
    }
  }

  onSelectYear(year: number): void {
    this.store.dispatch(new StudentsActions.SelectYear({year}));
  }

  onSelectClass(classType: string): void {
    this.store.dispatch(new StudentsActions.SelectClassType({classType}));
  }
}
