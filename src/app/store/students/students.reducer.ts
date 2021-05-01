import * as StudentsActions from './students.actions';
import {Student} from '../../core/model/student';

export interface State {
  years: Set<number>;
  classes: Set<string>;
  students: Student[];
  loaded: boolean;
}

const initialState: State = {
  years: new Set<number>(),
  classes: new Set<string>(),
  students: [],
  loaded: false,
};

export function studentsReducer(state = initialState, action: StudentsActions.StudentsActions): State {
  switch (action.type) {
    case StudentsActions.FETCH:
      return {
        ...state,
        years: new Set<number>(),
        classes: new Set<string>(),
        students: [],
        loaded: false,
      };
    case StudentsActions.FETCH_SUCCESS:
      return {
        ...state,
        years: action.payload.years,
        classes: action.payload.classes,
        students: action.payload.students,
        loaded: true,
      };
    case StudentsActions.FETCH_FAIL:
      return {
        ...state,
        loaded: true,
      };
    default:
      return {
        ...state,
      };
  }
}
