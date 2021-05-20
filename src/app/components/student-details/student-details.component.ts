import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Student} from '../../core/model/student';
import {StudentsStore} from '../../stores/students.store';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: Student | undefined = undefined;
  @Input() showCard = true;

  constructor(private studentsStore: StudentsStore) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.studentsStore.selectStudent(undefined);
  }
}
