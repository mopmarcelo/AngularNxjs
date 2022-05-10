import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject-service.service';

@Component({
  selector: 'app-comp-pai',
  templateUrl: './comp-pai.component.html',
  styleUrls: ['./comp-pai.component.css']
})
export class CompPaiComponent implements OnInit {

  constructor(private subjServices: SubjectService) { }

  ngOnInit(): void {
    this.subjServices.start();
    this.subjServices.generateData();
  }

}
