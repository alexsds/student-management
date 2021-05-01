import {ActionReducerMap} from '@ngrx/store';
import * as fromStudents from './students/students.reducer';

export interface State {
  students: fromStudents.State;
}

export const appReducer: ActionReducerMap<State, any> = {
  students: fromStudents.studentsReducer,
};
