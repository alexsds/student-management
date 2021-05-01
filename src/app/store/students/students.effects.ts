import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {StudentsService} from '../../core/service/students.service';
import * as StudentsActions from './students.actions';
import {Student} from '../../core/model/student';
import {Store} from '@ngrx/store';
import * as fromApp from '../app.reducer';
import {getSelectedClassType, getSelectedYear} from './students.selectors';

@Injectable()
export class StudentsEffects {
  fetchData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsActions.FETCH_DATA),
      switchMap(() => {
        return forkJoin({
          years: this.studentsService.years(),
          classTypes: this.studentsService.classTypes(),
        }).pipe(
          map(
            ({years, classTypes}) => new StudentsActions.FetchDataSuccess({years, classTypes}),
            catchError(() => of(new StudentsActions.FetchDataFail()))
          )
        );
      })
    );
  });

  selectClassType$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsActions.SELECT_CLASS_TYPE),
      switchMap((action: StudentsActions.SelectClassType) => {
        return this.studentsService.years(action.payload.classType).pipe(
          map(
            (years) => new StudentsActions.FetchYearsSuccess({years}),
            catchError(() => of(new StudentsActions.FetchYearsFail()))
          )
        );
      })
    );
  });

  selectYear$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsActions.SELECT_YEAR),
      switchMap((action: StudentsActions.SelectYear) => {
        return this.studentsService.classTypes(action.payload.year).pipe(
          map(
            (classTypes) => new StudentsActions.FetchClassTypesSuccess({classTypes}),
            catchError(() => of(new StudentsActions.FetchClassTypesFail()))
          )
        );
      })
    );
  });

  fetchStudents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsActions.FETCH_STUDENTS, StudentsActions.SELECT_YEAR, StudentsActions.SELECT_CLASS_TYPE),
      withLatestFrom(this.store.select(getSelectedYear), this.store.select(getSelectedClassType)),
      switchMap(([, selectedYear, selectedClassType]) => {
        return this.studentsService.get({year: selectedYear, classType: selectedClassType}).pipe(
          map((students: Student[]) => new StudentsActions.FetchStudentsSuccess({students})),
          catchError(() => of(new StudentsActions.FetchStudentsFail()))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.State>,
    private studentsService: StudentsService
  ) {}
}
