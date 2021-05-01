import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Student} from './core/model/student';
import {Store} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as StudentsActions from './store/students/students.actions';
import {isPlatformBrowser} from '@angular/common';
import {getClasses, getStudents, getYears} from './store/students/students.selectors';
import {Observable} from 'rxjs';
import {delay, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'students-managment';

  years$: Observable<Set<number>>;
  classes$: Observable<Set<string>>;
  students$: Observable<Student[]>;
  selectedStudent!: Student;

  constructor(private store: Store<fromApp.State>, @Inject(PLATFORM_ID) private platformId: object) {
    this.years$ = this.store.select(getYears);
    this.classes$ = this.store.select(getClasses);
    this.students$ = this.store.select(getStudents).pipe(
      take(1),
      tap((students) => {
        this.selectedStudent = students[0];
      })
    );
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new StudentsActions.Fetch());
    }
  }
}
