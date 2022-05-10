import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-comp-filho',
  templateUrl: './comp-filho.component.html',
  styleUrls: ['./comp-filho.component.css']
})
export class CompFilhoComponent implements OnInit {
  dataFromFather: any;

  constructor(private subjServices: SubjectService) { }

  ngOnInit(): void {
    this.subjServices.subjectObservable$.subscribe((subjectData) => {
      this.dataFromFather = subjectData;
    });
    
  }
}
