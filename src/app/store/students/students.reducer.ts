import * as StudentsActions from './students.actions';
import {Student} from '../../core/model/student';
import {GridView} from '../../core/enum/grid-view.enum';

export interface State {
  years: Set<number>;
  selectedYear: number | undefined;
  classTypes: Set<string>;
  selectedClassType: string | undefined;
  students: Student[];
  selectedStudent: Student | undefined;
  gridView: GridView;
  loaded: boolean;
}

const initialState: State = {
  years: new Set<number>(),
  selectedYear: undefined,
  classTypes: new Set<string>(),
  selectedClassType: undefined,
  students: [],
  selectedStudent: undefined,
  gridView: GridView.LIST,
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
        selectedStudent: undefined,
        selectedYear: action.payload.year,
      };
    case StudentsActions.SELECT_CLASS_TYPE:
      return {
        ...state,
        selectedStudent: undefined,
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
    case StudentsActions.SELECT_GRID_VIEW:
      return {
        ...state,
        selectedStudent: undefined,
        gridView: action.payload.gridView,
      };
    case StudentsActions.SUBMIT_FORM:
      return {
        ...state,
        selectedStudent: undefined,
      };
    case StudentsActions.UPDATE_GRADE_SUCCESS:
      const updatedStudent: Student = action.payload.student;
      let students = state.students;
      const foundIndex = students.findIndex(
        (x) => x.fname === updatedStudent.fname && x.lname === updatedStudent.lname
      );

      if (foundIndex !== -1) {
        students = {...state.students};
        students[foundIndex] = updatedStudent;
      }

      let selectedStudent = state.selectedStudent;
      if (
        selectedStudent &&
        selectedStudent.fname === updatedStudent.fname &&
        selectedStudent.lname === updatedStudent.lname
      ) {
        selectedStudent = students[foundIndex];
      }

      return {
        ...state,
        students,
        selectedStudent,
      };
    default:
      return {
        ...state,
      };
  }
}
