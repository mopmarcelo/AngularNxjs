import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IData } from '../models/idata';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  custumers: any = [];
  intervalIds = [];

  private subject$!: Subject<IData>;
  subjectObservable$!: Observable<IData>;

  constructor() { }

  start(){
    this.initSubjects();
  }

  initSubjects(){
    this.subject$ = new Subject();
    this.subjectObservable$ = this.subject$.asObservable();
  }

  generateData(){
    let intervalIds = setInterval(() => {
      let len = this.custumers.length;
      this.custumers.push({
        name: 'Customers ' + len,
        city: 'City ' + len
      });

      let cloneData = JSON.parse(JSON.stringify(this.custumers));
      this.subject$.next(cloneData);
    }, 3000);
  }
}
