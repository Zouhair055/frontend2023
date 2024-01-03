// add-assignment.component.ts
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
  assignments: Assignment[] = [];
  nomDevoir: string = '';
  dateDeRendu!: Date;
  auteur: string = '';
  matiere: string = '';
  note: number = 0;
  noteErrorMessage: string = '';
  remarques: string = '';
  matieres: string[] = ['Base de données', 'Analyse financière', 'Ingénierie des exigences', 'Communication', 'Anglais'];
  assignmentsDetailsComponent: any;

  
  constructor(private assignmentsService: AssignmentsService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.assignmentsService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;
    });
  }

  isAdmin(): boolean {
    return this.authService.loggedIn;
  }

  isUser(): boolean {
    return this.authService.loggedIn;
  }

  onSubmit() {
    if (!this.isAdmin() && !this.isUser()) {
      console.log('Seuls les administrateurs peuvent ajouter des devoirs.');
      return;
    }
  
    console.log(
      `${this.nomDevoir} à rendre le ${this.dateDeRendu} - Auteur: ${this.auteur}, Matière: ${this.matiere}, Note: ${this.note}, Remarques: ${this.remarques}`
    );
  
    if (this.note < 0 || this.note > 20) {
      alert('La note doit être comprise entre 0 et 20.');
      return;
    }
  
    const newAssignment = new Assignment();
newAssignment.id = Math.floor(Math.random() * 100000000);
newAssignment.nom = this.nomDevoir;
newAssignment.dateDeRendu = this.dateDeRendu;
newAssignment.rendu = false;
newAssignment.auteur = this.auteur;  // Assurez-vous que this.auteur est correctement défini depuis le formulaire
newAssignment.matiere = this.matiere;  // Assurez-vous que this.matiere est correctement défini depuis le formulaire
newAssignment.note = this.note;  // Assurez-vous que this.note est correctement défini depuis le formulaire
newAssignment.remarques = this.remarques;  // Assurez-vous que this.remarques est correctement défini depuis le formulaire

console.log("Nouvel assignment ajouté :", newAssignment);

this.assignmentsService.addAssignment(newAssignment).subscribe((reponse) => {
  console.log("Réponse du serveur add: ", reponse.message);
  this.router.navigate(['/assignments-details/:id']);
  this.assignmentsService.assignmentAdded$.next(); // Émettez un événement pour informer les abonnés (refreshAssignments)
});
  }
  }
