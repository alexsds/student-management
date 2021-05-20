import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GridView} from './core/enum/grid-view.enum';
import {StudentsStore} from './stores/students.store';
import {FiltersStore} from './stores/filters.store';
import {GridViewStore} from './stores/grid-view.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'students-management';
  gridView = GridView;

  constructor(
    public studentsStore: StudentsStore,
    public filtersStore: FiltersStore,
    public gridViewStore: GridViewStore
  ) {}

  ngOnInit(): void {}

  onSelectYear(year: number): void {
    this.filtersStore.selectYear(year);
    this.studentsStore.selectStudent(undefined);
  }

  onSelectClassType(classType: string): void {
    this.filtersStore.selectClassType(classType);
    this.studentsStore.selectStudent(undefined);
  }
}
