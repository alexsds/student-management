import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GridView} from '../../core/enum/grid-view.enum';
import {GridViewStore} from '../../mobx-store/grid-view.store';
import {StudentsStore} from '../../mobx-store/students.store';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridViewComponent implements OnInit {
  @Input() activeGridView: GridView | null = GridView.LIST;

  constructor(private gridViewStore: GridViewStore, private studentsStore: StudentsStore) {}

  ngOnInit(): void {}

  onSelectCardsGridView(): void {
    if (this.activeGridView !== GridView.CARDS) {
      this.gridViewStore.setView(GridView.CARDS);
      this.studentsStore.selectStudent(undefined);
    }
  }

  onSelectListGridView(): void {
    if (this.activeGridView !== GridView.LIST) {
      this.gridViewStore.setView(GridView.LIST);
      this.studentsStore.selectStudent(undefined);
    }
  }
}
