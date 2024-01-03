// assignments.component.ts
import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  
  titre = 'Mon application sur les assignments';

  assignments!: Assignment[];
  isUserLoggedIn: boolean = false;

  assignmentSelectionne!: Assignment;

  constructor(private assignmentsService: AssignmentsService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Récupérer les assignments
    this.assignmentsService.getAssignments().subscribe((assignments) => (this.assignments = assignments));

    // Vérifier l'état de connexion de l'utilisateur
    this.isUserLoggedIn = this.authService.isLogged();
  }

  // Gérer le clic sur le bouton
  onAddAssignmentClick() {
    // Vérifier à nouveau l'état de connexion de l'utilisateur
    this.isUserLoggedIn = this.authService.isLogged();

    // Si l'utilisateur est connecté, rediriger vers la page d'ajout d'assignment
    if (this.isUserLoggedIn) {
      this.router.navigate(['/add-assignment']);
    } else {
      // Si l'utilisateur n'est pas connecté, afficher un message
      console.log('Vous devez vous connecter pour ajouter un assignment.');
    }
  }

  onAssignmentClicke(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }
}
