// assignments-details.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../../shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Assignment } from '../assignment.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assignments-details',
  templateUrl: './assignments-details.component.html',
  styleUrls: ['./assignments-details.component.css'],
})
export class AssignmentsDetailsComponent implements OnInit {
  pageNumber: number = 1;
  // Propriétés pour gérer la pagination
  page: number = 1;
  limit: number = 10;
  totalDocs!: number;
  totalPages!: number;
  nextPage!: number;
  prevPage!: number;
  hasPrevPage!: boolean;
  hasNextPage!: boolean;

  showDetails = false;
  assignmentTransmis: Assignment;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  onAssignmentClick(assignment: Assignment) {
    if (this.assignmentTransmis === assignment) {
      this.toggleDetails();
    } else {
      this.assignmentTransmis = assignment;
      this.assignmentSelectionne = assignment;
      this.showDetails = true;
    }
  }

  assignments: Assignment[] = [];
  assignmentSelectionne!: Assignment;
  private assignmentsSub: Subscription;

  constructor(
    private assignmentService: AssignmentsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.assignmentTransmis = new Assignment();
    this.assignmentsSub = new Subscription();
  }

  ngOnInit(): void {
    this.assignmentService.getAssignmentsPagine(this.page, this.limit)
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

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onAssignmentRendu() {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;

      this.assignmentService.updateAssignment(this.assignmentTransmis)
        .subscribe(reponse => {
          console.log("réponse du serveur detail: " + reponse.message);

          if (this.assignmentTransmis) {
            this.assignmentService.deleteAssignement(this.assignmentTransmis)
              .subscribe(() => {
                console.log("Ancien devoir rendu supprimé");
              });
          }

          this.router.navigate(['/home']);
        });
    }
  }

  onDelete() {
    if (this.assignmentTransmis) {

      if (this.authService.userRole !== 'admin') {
        console.log('Only admins can delete assignments.');
        return;
      }

      this.assignmentService
        .deleteAssignement(this.assignmentTransmis)
        .subscribe((reponse) => {
          console.log("réponse du serveur delet : " + reponse.message);
          this.router.navigate(['/home']);
        });
    }
  }

  isAdmin(): boolean {
    return this.authService.loggedIn && this.authService.userRole === 'admin';
  }

  isuser(): boolean {
    return this.authService.loggedIn;
  }

  changePage(page: number): void {
    this.page = page;

    this.assignmentService.getAssignmentsPagine(this.page, this.limit)
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
  goToPage(): void {
    if (this.pageNumber && this.pageNumber >= 1 && this.pageNumber <= this.totalPages) {
      this.changePage(this.pageNumber);
    }
  }
}