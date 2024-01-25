// assignments-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../../shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Assignment } from '../assignment.model';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { SearchService } from '../../shared/search.service';


@Component({
  selector: 'app-assignments-details',
  templateUrl: './assignments-details.component.html',
  styleUrls: ['./assignments-details.component.css'],
})
export class AssignmentsDetailsComponent implements OnInit, OnDestroy  {

  private searchSubscription!: Subscription;
  pageNumber: number = 1;
  userLoggedIn: boolean = false;

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
  searchTerm: string = '';
  renduFilter:string = "" ;


  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
  
  
  onFilterChange() {
    console.log('Filter changed:', this.renduFilter);
    this.refreshAssignments();
    
  }
  matchesSearch(assignment: Assignment): boolean {
    if (!this.searchTerm) return true;
  
    const searchTermLower = this.searchTerm.toLowerCase().trim();
    const assignmentNameLower = assignment.nom.toLowerCase().trim();
    const match = assignmentNameLower.includes(searchTermLower);
  
    return match;
  }
  matchesFilter(assignment: Assignment): boolean {
    try {
      if (this.renduFilter === null || this.renduFilter === undefined) {
        return true;
      }
      const renduFilterLower = String(this.renduFilter).toLowerCase().trim();
      const assignmentRenduLower = String(assignment.rendu).toLowerCase().trim();
      if (renduFilterLower === 'true' && assignmentRenduLower === 'true') {
        return true;
      } else if (renduFilterLower === 'false' && assignmentRenduLower === 'false') {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error in matchesFilter:", error);
      return false;
    }
  }
  

  
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  onAssignmentClick(assignment: Assignment) {
    if (this.authService.isLogged()) {  // Vérifiez si l'utilisateur est connecté
      if (this.assignmentTransmis === assignment) {
        this.toggleDetails();
      } else {
        this.assignmentTransmis = assignment;
        this.assignmentSelectionne = assignment;
        this.showDetails = true;
      }
    }
  }

  assignments: Assignment[] = [];
  assignmentSelectionne!: Assignment;
  private assignmentsSub: Subscription;

  constructor(
    private assignmentService: AssignmentsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService

  ) {
    this.assignmentTransmis = new Assignment();
    this.assignmentsSub = new Subscription();
  }

  ngOnInit(): void {
    console.log('Rôle de l\'utilisateur:', this.authService.userRole);
    this.refreshAssignments();

    // S'abonner à l'événement d'ajout de devoir
    this.assignmentService.assignmentAdded$.subscribe(() => {
      this.refreshAssignments();
    });
    
    this.searchSubscription = this.searchService.searchTerm$.subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.refreshAssignments();
    });
  }

  refreshAssignments() {
    console.log('Refreshing assignments with search term and rendu filter:', this.searchTerm, this.renduFilter);
    
    // Ensure that this.renduFilter is properly initialized before passing it
    this.assignmentService.getAssignmentsPagine(this.page, this.limit, this.searchTerm, this.renduFilter)
      .subscribe(
        data => {
          console.log("Liste des devoirs mise à jour: ", data);
          this.assignments = data.docs;
          this.totalDocs = data.totalDocs;
          this.totalPages = data.totalPages;
          this.nextPage = data.nextPage;
          this.prevPage = data.prevPage;
          this.hasPrevPage = data.hasPrevPage;
          this.hasNextPage = data.hasNextPage;
          console.log("Liste des devoirs mise à jour: ", this.assignments);
        },
        error => {
          console.error("Erreur lors de la recherche des devoirs :", error);
          // Gérer l'erreur selon vos besoins
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
                this.refreshAssignments(); // Mise à jour après la suppression
              });
          }

          this.router.navigate(['/assignements-details/:id']);
        });
    }
  }

  onDelete() {
    if (this.assignmentTransmis) {
      if (!this.authService.isAdmin()) {
        console.log('Seuls les administrateurs peuvent supprimer des devoirs.');
        return;
      }

      this.assignmentService
        .deleteAssignement(this.assignmentTransmis)
        .subscribe((reponse) => {
          console.log("réponse du serveur delet : " + reponse.message);
          this.refreshAssignments(); // Mise à jour après la suppression
        });
    }
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  isuser(): boolean {
    return this.authService.isLogged();
  }

  changePage(page: number): void {
    this.page = page;
  
    this.assignmentService.getAssignmentsPagine(this.page, this.limit, this.searchTerm, this.renduFilter)
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
        },
        error => {
          console.error("Erreur lors de la recherche des devoirs :", error);
          // Gérer l'erreur selon vos besoins
        }
      );
  }

  goToPage(): void {
    if (this.pageNumber && this.pageNumber >= 1 && this.pageNumber <= this.totalPages) {
      this.changePage(this.pageNumber);
    }
  }
}