import {Injectable} from '@angular/core';
import {Student} from '../model/student';
import {Observable, of} from 'rxjs';
import {GetStudentsRequest} from '../request/get-students.request';

interface ClassStudents {
  students: Student[];
  classType: string;
}

interface Data {
  classStudents: ClassStudents[];
  classTypes: string[];
}

@Injectable()
export class DataService {
  private data: Data;

  constructor() {
    this.data = getData();
  }

  getYears(selectedClassType?: string): Observable<Set<number>> {
    const years: number[] = [];
    this.data.classStudents.forEach((item) => {
      if (selectedClassType && selectedClassType !== item.classType) {
        return;
      }

      return item.students.forEach((student) => {
        years.push(student.year);
      });
    });

    years.sort();

    return of(new Set<number>(years));
  }

  getClassTypes(selectedYear?: number): Observable<Set<string>> {
    const classTypes: string[] = [];
    this.data.classStudents.forEach((item) => {
      if (selectedYear) {
        const students = item.students.find((student) => {
          return student.year === selectedYear;
        });
        if (!students) {
          return;
        }
      }

      classTypes.sort();

      classTypes.push(item.classType);
    });

    return of(new Set<string>(classTypes));
  }

  getStudents(request?: GetStudentsRequest): Observable<Student[]> {
    const students: Student[] = [];
    this.data.classStudents.forEach((item) => {
      if (request?.classType) {
        if (item.classType !== request.classType) {
          return;
        }
      }

      return item.students.forEach((student) => {
        if (request?.year) {
          if (student.year !== request.year) {
            return;
          }
        }

        students.push(student);
      });
    });

    return of(students);
  }

  updateStudentGrade(student: Student, grade: number): Observable<Student> {
    const updatedStudent = {...student};
    updatedStudent.grade = parseFloat(String(grade));
    this.data.classStudents.map((item) => {
      const foundIndex = item.students.indexOf(student);
      if (foundIndex !== -1) {
        item.students[foundIndex] = updatedStudent;
        return;
      }
    });

    return of(updatedStudent);
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
