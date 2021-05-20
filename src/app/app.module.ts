import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {DataService} from './core/service/data.service';
import {StudentGridComponent} from './components/student-grid/student-grid.component';
import {StudentCardComponent} from './components/student-card/student-card.component';
import {GridViewComponent} from './components/grid-view/grid-view.component';
import {StudentDetailsComponent} from './components/student-details/student-details.component';
import {MobxAngularModule} from 'mobx-angular';
import {StudentsStore} from './stores/students.store';
import {FiltersStore} from './stores/filters.store';
import {GridViewStore} from './stores/grid-view.store';

@NgModule({
  declarations: [AppComponent, StudentGridComponent, StudentCardComponent, GridViewComponent, StudentDetailsComponent],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    MobxAngularModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          [
            'clean',
            'underline',
            'italic',
            'bold',
            'strike',
            {align: 'justify'},
            {align: ''},
            {align: 'center'},
            {align: 'right'},
            {list: 'bullet'},
            {list: 'ordered'},
            {indent: '-1'},
            {indent: '+1'},
          ],
        ],
      },
    }),
  ],
  providers: [DataService, StudentsStore, FiltersStore, GridViewStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
