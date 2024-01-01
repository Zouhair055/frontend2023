//assignements.component.ts
import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  //pour gérer la pagination
  page: number = 1;
  limit: number = 10;
  totalDocs!: number;
  totalPages!: number;
  nextPage!: number;
  prevPage!: number;
  hasPrevPage!: boolean;
  hasNextPage!: boolean;


  titre = 'Mon application sur les assignments';

  assignments!: Assignment[];

  assignmentSelectionne!: Assignment;

  constructor(private assignmentsService: AssignmentsService) {}

  // ngOnInit(): void {
  //   this.assignmentsService
  //   /*  .getAssignments()
  //     .subscribe((tableauDesAssignmentsObservable) => {
  //       this.assignments = tableauDesAssignmentsObservable;
  //     });
  //     */
  // }

  ngOnInit(): void {
    this.assignmentsService.getAssignmentsPagine(this.page, this.limit)
      .subscribe(
        data => {
          this.assignments = data.docs;
          this.totalDocs = data.totalDocs;
          this.totalPages = data.totalPages;
          this.nextPage = data.nextPage;
          this.prevPage = data.prevPage;
          this.hasPrevPage = data.hasPrevPage;
          this.hasNextPage = data.hasNextPage;
          console.log("Données reçues: ", this.assignments);
        }
      );
  }
  
  onAssignmentClicke(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }
}
