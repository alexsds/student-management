import {Injectable} from '@angular/core';
import {action, computed, observable} from 'mobx';
import {Student} from '../core/model/student';
import {DataService} from '../core/service/data.service';
import {take} from 'rxjs/operators';
import {FiltersStore} from './filters.store';

@Injectable()
export class StudentsStore {
  @observable.struct students: Student[] = [];
  @observable selected: Student | undefined = undefined;

  constructor(private dataService: DataService, private filtersStore: FiltersStore) {
    this.dataService
      .getStudents()
      .pipe(take(1))
      .subscribe((data) => {
        this.students = data;
      });
  }

  @computed.struct get filteredStudents(): Student[] {
    let students = this.students;
    if (this.filtersStore.selectedYear) {
      students = students.filter((student) => student.year === this.filtersStore.selectedYear);
    }
    if (this.filtersStore.selectedClassType) {
      students = students.filter((student) => student.classType === this.filtersStore.selectedClassType);
    }
    console.log('students', students);

    return students;
  }

  @action selectStudent(student: Student | undefined): void {
    this.selected = student;
  }

  @action updateGrade(student: Student, grade: number): void {
    const index = this.students.findIndex((item) => item === student);
    this.students[index] = {...this.students[index], grade};
  }
}
