import * as StudentsActions from './students.actions';
import {Student} from '../../core/model/student';

export interface State {
  years: Set<number>;
  selectedYear: number | undefined;
  classTypes: Set<string>;
  selectedClassType: string | undefined;
  students: Student[];
  selectedStudent: Student | undefined;
  loaded: boolean;
}

const initialState: State = {
  years: new Set<number>(),
  selectedYear: undefined,
  classTypes: new Set<string>(),
  selectedClassType: undefined,
  students: [],
  selectedStudent: undefined,
  loaded: false,
};

export function studentsReducer(state = initialState, action: StudentsActions.StudentsActions): State {
  switch (action.type) {
    case StudentsActions.FETCH_DATA:
      return {
        ...state,
        years: new Set<number>(),
        classTypes: new Set<string>(),
        loaded: false,
      };
    case StudentsActions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        years: action.payload.years,
        classTypes: action.payload.classTypes,
        loaded: true,
      };
    case StudentsActions.FETCH_DATA_FAIL:
      return {
        ...state,
        loaded: true,
      };
    case StudentsActions.FETCH_CLASS_TYPES:
      return {
        ...state,
        classTypes: new Set<string>(),
      };
    case StudentsActions.FETCH_CLASS_TYPES_SUCCESS:
      return {
        ...state,
        classTypes: action.payload.classTypes,
      };
    case StudentsActions.FETCH_YEARS:
      return {
        ...state,
        years: new Set<number>(),
      };
    case StudentsActions.FETCH_YEARS_SUCCESS:
      return {
        ...state,
        years: action.payload.years,
      };
    case StudentsActions.SELECT_YEAR:
      return {
        ...state,
        selectedYear: action.payload.year,
      };
    case StudentsActions.SELECT_CLASS_TYPE:
      return {
        ...state,
        selectedClassType: action.payload.classType,
      };
    case StudentsActions.FETCH_STUDENTS:
      return {
        ...state,
        students: [],
      };
    case StudentsActions.FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload.students,
      };
    case StudentsActions.SELECT_STUDENT:
      return {
        ...state,
        selectedStudent: action.payload.student,
      };
    default:
      return {
        ...state,
      };
  }
}