import {Injectable} from '@angular/core';
import {Student} from '../model/student';
import {Observable, of} from 'rxjs';

interface ClassStudents {
  students: Student[];
  classType: string;
}

interface Data {
  classStudents: ClassStudents[];
  classTypes: string[];
}

@Injectable()
export class StudentsService {
  private data: Data;

  constructor() {
    this.data = getData();
  }

  years(): Observable<Set<number>> {
    const years = new Set<number>();
    this.data.classStudents.map((item) => {
      return item.students.forEach((student) => {
        years.add(student.year);
      });
    });

    return of(years);
  }

  classes(): Observable<Set<string>> {
    const classes = new Set<string>();
    this.data.classTypes.map((classTypes) => {
      classes.add(classTypes);
    });

    return of(classes);
  }

  get(): Observable<Student[]> {
    const students: Student[] = [];
    this.data.classStudents.map((item) => {
      return item.students.forEach((student) => {
        students.push(student);
      });
    });

    return of(students);
  }
}

const getData = () => {
  return {
    classStudents: [
      {
        students: [
          {fname: 'Jones', lname: 'Smith', grade: 84.2, year: 1940},
          {fname: 'Barbara', lname: 'Farly', grade: 55.0, year: 1940},
          {fname: 'Shirly', lname: 'Tema', grade: 30.0, year: 2012},
          {fname: 'Santa', lname: 'Rummi', grade: 75.0, year: 2012},
        ],
        classType: 'Biology',
      },
      {
        students: [
          {fname: 'Sara', lname: 'Karlson', grade: 99.2, year: 1960},
          {fname: 'Avi', lname: 'Kaster', grade: 70.0, year: 1960},
          {fname: 'Sami', lname: 'Perez', grade: 90.0, year: 2009},
        ],
        classType: 'Chemistry',
      },
      {
        students: [
          {fname: 'Tevon', lname: 'Barens', grade: 43.0, year: 1980},
          {fname: 'Josef', lname: 'Cohen', grade: 60.0, year: 1980},
          {fname: 'Nati', lname: 'Green', grade: 99.0, year: 2001},
          {fname: 'Shakil', lname: 'Jareh', grade: 88.0, year: 2001},
        ],
        classType: 'ComputerScience',
      },
    ],
    classTypes: ['Biology', 'Chemistry', 'ComputerScience'],
  };
};
