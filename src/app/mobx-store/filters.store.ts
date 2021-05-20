import {Injectable} from '@angular/core';
import {action, observable} from 'mobx';
import {DataService} from '../core/service/data.service';
import {take} from 'rxjs/operators';

@Injectable()
export class FiltersStore {
  @observable years!: number[];
  @observable selectedYear: number | undefined = undefined;
  @observable classTypes!: string[];
  @observable selectedClassType: string | undefined = undefined;

  constructor(private dataService: DataService) {
    this.loadYears();
    this.loadClassTypes();
  }

  @action selectYear(year: number): void {
    this.selectedYear = year;
    this.loadClassTypes(year);
  }

  @action selectClassType(classType: string): void {
    this.selectedClassType = classType;
    this.loadYears(classType);
  }

  private loadYears(classType?: string): void {
    this.dataService
      .getYears(classType)
      .pipe(take(1))
      .subscribe((data) => {
        this.years = Array.from(data);
      });
  }

  private loadClassTypes(year?: number): void {
    this.dataService
      .getClassTypes(year)
      .pipe(take(1))
      .subscribe((data) => {
        this.classTypes = Array.from(data);
      });
  }
}
