import {Action} from '@ngrx/store';
import {Student} from '../../core/model/student';

export const FETCH = '[Students] Fetch';
export const FETCH_SUCCESS = '[Students] Fetch Success';
export const FETCH_FAIL = '[Students] Fetch Fail';

export class Fetch implements Action {
  readonly type = FETCH;
}

export class FetchSuccess implements Action {
  readonly type = FETCH_SUCCESS;

  constructor(public payload: {years: Set<number>; classes: Set<string>; students: Student[]}) {}
}

export class FetchFail implements Action {
  readonly type = FETCH_FAIL;
}

export type StudentsActions = Fetch | FetchSuccess | FetchFail;
