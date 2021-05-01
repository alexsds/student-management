import {Action} from '@ngrx/store';
import {Student} from '../../core/model/student';
import {GridView} from '../../core/enum/grid-view.enum';

export const FETCH_DATA = '[Students] Fetch Data';
export const FETCH_DATA_SUCCESS = '[Students] Fetch Data Success';
export const FETCH_DATA_FAIL = '[Students] Fetch Data Fail';

export const FETCH_CLASS_TYPES = '[Students] Fetch Class Types';
export const FETCH_CLASS_TYPES_SUCCESS = '[Students] Fetch Class Types Success';
export const FETCH_CLASS_TYPES_FAIL = '[Students] Fetch Class Types Fail';

export const FETCH_YEARS = '[Students] Fetch Years';
export const FETCH_YEARS_SUCCESS = '[Students] Fetch Years Success';
export const FETCH_YEARS_FAIL = '[Students] Fetch Years Fail';

export const SELECT_YEAR = '[Students] Select Year';
export const SELECT_CLASS_TYPE = '[Students] Select Class Type';

export const FETCH_STUDENTS = '[Students] Fetch Students';
export const FETCH_STUDENTS_SUCCESS = '[Students] Fetch Students Success';
export const FETCH_STUDENTS_FAIL = '[Students] Fetch Students Fail';

export const SELECT_STUDENT = '[Students] Select Student';

export const SELECT_GRID_VIEW = '[Students] Select Grid View';

export class FetchData implements Action {
  readonly type = FETCH_DATA;
}

export class FetchDataSuccess implements Action {
  readonly type = FETCH_DATA_SUCCESS;

  constructor(public payload: {years: Set<number>; classTypes: Set<string>}) {}
}

export class FetchDataFail implements Action {
  readonly type = FETCH_DATA_FAIL;
}

export class FetchClassTypes implements Action {
  readonly type = FETCH_CLASS_TYPES;
}

export class FetchClassTypesSuccess implements Action {
  readonly type = FETCH_CLASS_TYPES_SUCCESS;

  constructor(public payload: {classTypes: Set<string>}) {}
}

export class FetchClassTypesFail implements Action {
  readonly type = FETCH_CLASS_TYPES_FAIL;
}

export class FetchYears implements Action {
  readonly type = FETCH_YEARS;
}

export class FetchYearsSuccess implements Action {
  readonly type = FETCH_YEARS_SUCCESS;

  constructor(public payload: {years: Set<number>}) {}
}

export class FetchYearsFail implements Action {
  readonly type = FETCH_YEARS_FAIL;
}

export class SelectYear implements Action {
  readonly type = SELECT_YEAR;

  constructor(public payload: {year: number}) {}
}

export class SelectClassType implements Action {
  readonly type = SELECT_CLASS_TYPE;

  constructor(public payload: {classType: string}) {}
}

export class FetchStudents implements Action {
  readonly type = FETCH_STUDENTS;
}

export class FetchStudentsSuccess implements Action {
  readonly type = FETCH_STUDENTS_SUCCESS;

  constructor(public payload: {students: Student[]}) {}
}

export class FetchStudentsFail implements Action {
  readonly type = FETCH_STUDENTS_FAIL;
}

export class SelectStudent implements Action {
  readonly type = SELECT_STUDENT;

  constructor(public payload: {student: Student}) {}
}

export class SelectGridView implements Action {
  readonly type = SELECT_GRID_VIEW;

  constructor(public payload: {gridView: GridView}) {}
}

export type StudentsActions =
  | FetchData
  | FetchDataSuccess
  | FetchDataFail
  | FetchClassTypes
  | FetchClassTypesSuccess
  | FetchClassTypesFail
  | FetchYears
  | FetchYearsSuccess
  | FetchYearsFail
  | SelectYear
  | SelectClassType
  | FetchStudents
  | FetchStudentsSuccess
  | FetchStudentsFail
  | SelectStudent
  | SelectGridView;
