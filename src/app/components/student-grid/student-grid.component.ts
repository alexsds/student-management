import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Student} from '../../core/model/student';
import * as StudentsActions from '../../store/students/students.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {GridView} from '../../core/enum/grid-view.enum';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.sass'],
})
export class StudentGridComponent implements OnInit {
  @Input() gridView: GridView | null = GridView.LIST;
  @Input() students: Student[] | null = [];
  @Input() selected: Student | undefined | null = undefined;

  gridViewEnum = GridView;

  @ViewChild('image') image!: ElementRef;

  constructor(private store: Store<fromApp.State>) {}

  ngOnInit(): void {}

  onSelectStudent(student: Student): void {
    this.store.dispatch(new StudentsActions.SelectStudent({student}));
  }
}
