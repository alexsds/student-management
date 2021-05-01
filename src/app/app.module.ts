import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StudentsService} from './core/service/students.service';
import {StudentsEffects} from './store/students/students.effects';
import * as fromApp from './store/app.reducer';
import {StudentGridComponent} from './components/student-grid/student-grid.component';

@NgModule({
  declarations: [AppComponent, StudentGridComponent],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([StudentsEffects]),
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
