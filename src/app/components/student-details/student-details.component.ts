import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../core/model/student';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as StudentsActions from '../../store/students/students.actions';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.sass'],
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: Student | undefined = undefined;
  @Input() showCard = true;

  constructor(private store: Store<fromApp.State>) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.store.dispatch(new StudentsActions.SubmitForm());
  }
}
