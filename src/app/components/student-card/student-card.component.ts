import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../core/model/student';
import * as StudentsActions from '../../store/students/students.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.sass'],
})
export class StudentCardComponent implements OnInit {
  @Input() student: Student | undefined = undefined;
  @Input() selected: Student | undefined | null = undefined;
  @Input() useHighlight = true;

  constructor(private store: Store<fromApp.State>) {}

  ngOnInit(): void {}

  onSelectStudent(event: any, student: Student): void {
    if (event.target.nodeName === 'INPUT') {
      return;
    }

    this.store.dispatch(new StudentsActions.SelectStudent({student}));
  }

  onUpdateGrade($event: any, student: Student): void {
    const grade = $event.target?.value;
    this.store.dispatch(new StudentsActions.UpdateGrade({student, grade}));
  }
}
