import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {StudentsService} from '../../core/service/students.service';
import * as StudentsActions from './students.actions';

@Injectable()
export class StudentsEffects {
  fetch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsActions.FETCH),
      switchMap(() => {
        return forkJoin({
          years: this.studentsService.years(),
          classes: this.studentsService.classes(),
          students: this.studentsService.get(),
        }).pipe(
          map(
            ({years, classes, students}) => new StudentsActions.FetchSuccess({years, classes, students}),
            catchError(() => of(new StudentsActions.FetchFail()))
          )
        );
      })
    );
  });

  constructor(private actions$: Actions, private studentsService: StudentsService) {}
}
