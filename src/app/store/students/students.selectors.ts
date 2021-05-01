import {createSelector} from '@ngrx/store';
import {getAppState} from '../app.selector';

export const getYears = createSelector(getAppState, (state) => state?.students.years);
export const getClasses = createSelector(getAppState, (state) => state?.students.classes);
export const getStudents = createSelector(getAppState, (state) => state?.students.students);
export const isStudentsLoaded = createSelector(getAppState, (state) => state?.students.loaded);
