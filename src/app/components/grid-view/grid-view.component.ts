import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as StudentsActions from '../../store/students/students.actions';
import {GridView} from '../../core/enum/grid-view.enum';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.sass'],
})
export class GridViewComponent implements OnInit {
  @Input() activeGridView: GridView | null = GridView.LIST;

  constructor(private store: Store<fromApp.State>) {}

  ngOnInit(): void {}

  onSelectCardsGridView(): void {
    if (this.activeGridView !== GridView.CARDS) {
      this.store.dispatch(new StudentsActions.SelectGridView({gridView: GridView.CARDS}));
    }
  }

  onSelectListGridView(): void {
    if (this.activeGridView !== GridView.LIST) {
      this.store.dispatch(new StudentsActions.SelectGridView({gridView: GridView.LIST}));
    }
  }
}
