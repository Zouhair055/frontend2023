// assignement-details.component.ts
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

  showDetails = false;

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
  
  @Input() assignmentTransmis: Assignment ;
  assignments : Assignment[] = [];
  assignmentSelectionne!:Assignment;
  private assignmentsSub:Subscription;
  constructor(
    private assignmentService: AssignmentsService,
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router
  ) {  this.assignmentTransmis = new Assignment();
    this.assignmentsSub = new Subscription();

  }

  ngOnInit(): void {
    //this.assignments = this.assignmentService.getAssignments();
    this.assignmentService.getAssignments().subscribe((assignments: Assignment[]) => {
      this.assignments = assignments;
    });
    this.assignmentsSub = this.assignmentService.getAssignmentsUpdateListener()
    .subscribe((assignments : Assignment[])=> {
      this.assignments = assignments;
    })
  }

  assignmentClique(assignment:Assignment){
  this.assignmentSelectionne = assignment;
  }

  onAssignmentRendu() {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;

      this.assignmentService.updateAssignment(this.assignmentTransmis)
        .subscribe(reponse => {
          console.log("réponse du serveur detail: " + reponse.message);

          // Assurez-vous que this.assignmentTransmis est défini avant de le passer à deleteAssignement
          if (this.assignmentTransmis) {
            // Supprimez l'ancien devoir de la liste
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
    if (this.assignmentTransmis){
    
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
  isuser():boolean {
    return this.authService.loggedIn;
  }

  
}