// edit-assignment.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
 selector: 'app-edit-assignment',
 templateUrl: './edit-assignment.component.html',
 styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
 assignment!: Assignment | undefined;
 nomAssignment!: string;
 dateDeRendu!: Date;
 matiere!: string;
 note!: number;
 remarques!: string;

 constructor(
   private assignmentsService: AssignmentsService,
   private route: ActivatedRoute,
   private router: Router
 ) {}

 ngOnInit(): void {
   this.getAssignment();
 }

 getAssignment() {
   const id = +this.route.snapshot.params['id'];

   this.assignmentsService.getAssignment(id).subscribe((assignment) => {
     if (!assignment) return;
     this.assignment = assignment;
     this.nomAssignment = assignment.nom;
     this.dateDeRendu = assignment.dateDeRendu;
     this.matiere = assignment.matiere;
     this.note = assignment.note;
     this.remarques = assignment.remarques;
   });
 }

 onSaveAssignment() {
   if (!this.assignment) return;

   // Vérification de la note
   if (this.note < 0 || this.note > 20) {
     alert('La note doit être comprise entre 0 et 20.');
     return;
   }

   this.assignment.nom = this.nomAssignment;
   this.assignment.dateDeRendu = this.dateDeRendu;
   this.assignment.matiere = this.matiere;
   this.assignment.note = this.note;
   this.assignment.remarques = this.remarques;

   this.assignmentsService.updateAssignment(this.assignment).subscribe((reponse) => {
     console.log('Réponse du serveur edit : ' + reponse.message);

     if (this.assignment) {
       this.assignmentsService.deleteAssignement(this.assignment).subscribe(() => {
         console.log('Ancien devoir supprimé');
       });
     }

     this.router.navigate(['/assignments-details/:id']);
   });
 }
}
