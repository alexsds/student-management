import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Student} from '../../core/model/student';
import {StudentsStore} from '../../stores/students.store';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentCardComponent implements OnInit {
  @Input() student: Student | undefined = undefined;
  @Input() selected: Student | undefined | null = undefined;
  @Input() useHighlight = true;

  constructor(private studentsStore: StudentsStore) {}

  ngOnInit(): void {}

  onSelectStudent(event: any, student: Student): void {
    if (event.target.nodeName === 'INPUT') {
      return;
    }

    this.studentsStore.selectStudent(student);
  }

  onUpdateGrade($event: any, student: Student): void {
    const grade = $event.target?.value;
    this.studentsStore.updateGrade(student, grade);
  }
}
