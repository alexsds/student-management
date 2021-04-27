import {Component} from '@angular/core';
import {Student} from './core/model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'students-managment';

  studentsData =
    ' [{ "fname": "Tevon", "lname": "Barens", "grade": 43.0, "year": 1980 }, { "fname": "Josef", "lname": "Cohen", "grade": 60.0, "year": 1980 }, { "fname": "Nati", "lname": "Green", "grade": 99.0, "year": 2001 }, { "fname": "Shakil", "lname": "Jareh", "grade": 88.0, "year": 2001}]';
  students: Student[];
  selectedStudent: Student;
  years = [1940, 2012, 1960, 2009, 1980];
  classes = ['Biology', 'Chemistry', 'ComputerScience'];

  constructor() {
    this.students = JSON.parse(this.studentsData);
    this.selectedStudent = this.students[0];
  }
}
