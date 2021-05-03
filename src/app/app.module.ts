import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {QuillModule} from 'ngx-quill';
import {DataService} from './core/service/data.service';
import {StudentsEffects} from './store/students/students.effects';
import * as fromApp from './store/app.reducer';
import {StudentGridComponent} from './components/student-grid/student-grid.component';
import {StudentCardComponent} from './components/student-card/student-card.component';
import {GridViewComponent} from './components/grid-view/grid-view.component';
import {StudentDetailsComponent} from './components/student-details/student-details.component';

@NgModule({
  declarations: [AppComponent, StudentGridComponent, StudentCardComponent, GridViewComponent, StudentDetailsComponent],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([StudentsEffects]),
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
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
