import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Student} from '../../core/model/student';
import {GridView} from '../../core/enum/grid-view.enum';
import {StudentsStore} from '../../stores/students.store';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentGridComponent implements OnInit {
  @Input() gridView: GridView | null = GridView.LIST;
  @Input() students: Student[] | null = [];
  @Input() selected: Student | undefined | null = undefined;

  gridViewEnum = GridView;

  constructor(private studentsStore: StudentsStore) {}

  ngOnInit(): void {}

  onSelectStudent(student: Student): void {
    this.studentsStore.selectStudent(student);
  }
}
