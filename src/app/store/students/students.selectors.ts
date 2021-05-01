import {createSelector} from '@ngrx/store';
import {getAppState} from '../app.selector';

export const getYears = createSelector(getAppState, (state) => state?.students.years);
export const getSelectedYear = createSelector(getAppState, (state) => state?.students.selectedYear);
export const getClassTypes = createSelector(getAppState, (state) => state?.students.classTypes);
export const getSelectedClassType = createSelector(getAppState, (state) => state?.students.selectedClassType);
export const getStudents = createSelector(getAppState, (state) => state?.students.students);
export const getSelectedStudent = createSelector(getAppState, (state) => state?.students.selectedStudent);
export const getGridView = createSelector(getAppState, (state) => state?.students.gridView);
export const isStudentsLoaded = createSelector(getAppState, (state) => state?.students.loaded);
