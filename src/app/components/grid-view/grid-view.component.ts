import {Component, OnInit} from '@angular/core';
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
  constructor(private store: Store<fromApp.State>) {}

  ngOnInit(): void {}

  onSelectCardsGridView(): void {
    this.store.dispatch(new StudentsActions.SelectGridView({gridView: GridView.CARDS}));
  }

  onSelectListGridView(): void {
    this.store.dispatch(new StudentsActions.SelectGridView({gridView: GridView.LIST}));
  }
}
