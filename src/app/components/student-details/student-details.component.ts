import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Student} from '../../core/model/student';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {StudentsStore} from '../../mobx-store/students.store';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: Student | undefined = undefined;
  @Input() showCard = true;

  constructor(private store: Store<fromApp.State>, private studentsStore: StudentsStore) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.studentsStore.selectStudent(undefined);
  }
}
