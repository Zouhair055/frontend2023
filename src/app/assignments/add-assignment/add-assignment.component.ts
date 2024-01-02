import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../../shared/assignments.service';
import { Assignment } from '../assignment.model';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
assignments : Assignment[] = [];
  nomDevoir: string = '';
  dateDeRendu!: Date;
//hahna 005
  constructor(private assignmentsService:AssignmentsService,private router:Router,private authService:AuthService) {}

  ngOnInit(): void {}
  isAdmin():boolean {
    return this.authService.loggedIn;
  }
  isuser():boolean {
    return this.authService.loggedIn;
  }
  onSubmit() {
    if (!this.isAdmin() && !this.isuser()) {
      console.log('Only admins can add assignments.');
      return;
    }
    console.log(this.nomDevoir + ' a rendre le ' + this.dateDeRendu);
    const newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random()*100000000);
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);
    this.assignmentsService.addAssignment(newAssignment).subscribe((reponse) => {
        console.log("réponse de serveur add: " + reponse.message);
    this.router.navigate(['/assignments-details/:id']);
    });

    //this.assignments.push(newAssignment);
    //this.nouvelAssignment.emit(newAssignment);
   
  }
}
