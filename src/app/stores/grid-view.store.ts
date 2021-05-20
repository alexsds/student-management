import {Injectable} from '@angular/core';
import {action, observable} from 'mobx';
import {GridView} from '../core/enum/grid-view.enum';

@Injectable()
export class GridViewStore {
  @observable view = GridView.LIST;

  @action setView(view: GridView): void {
    this.view = view;
  }
}
