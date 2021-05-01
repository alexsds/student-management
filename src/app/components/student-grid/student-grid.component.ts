import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../core/model/student';
import * as StudentsActions from '../../store/students/students.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Observable} from 'rxjs';
import {getSelectedStudent} from '../../store/students/students.selectors';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.sass'],
})
export class StudentGridComponent implements OnInit {
  @Input() students: Student[] | null = [];
  selectedStudent$: Observable<Student | undefined>;

  constructor(private store: Store<fromApp.State>) {
    this.selectedStudent$ = this.store.select(getSelectedStudent);
  }

  ngOnInit(): void {}

  onSelectStudent(student: Student): void {
    this.store.dispatch(new StudentsActions.SelectStudent({student}));
  }
}
