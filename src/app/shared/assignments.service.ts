// assignments.service.ts
import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, Subject, catchError, forkJoin, map, of, tap } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { assignmentsData } from './data';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  matieresWithImages : { [key: string]: string } = {
    'JavaScript et html': 'assets/JavaScript et htmlimg.jpg',
    'SGBD': 'assets/SGBDimg.jpg',
    'Ingénierie des exigences': 'assets/Ingenierie des exigencesimg.jpg',
    'Communication': 'assets/Communicationimg.jpg',
    'Programmation avancée': 'assets/Programmation avancéimg.jpg',
  };
  assignments:Assignment[] = [];
  private assignmentsUpdated = new Subject<Assignment[]>();
  constructor(private logginService:LoggingService,
              private http:HttpClient) { }

url = "http://localhost:8010/api/assignments";
//url = "https://back-end-2023-angular.onrender.com/api/assignments"                                
getAssignments():Observable<Assignment[]>{
    return this.http.get<Assignment[]>(this.url);
}
private assignmentAdded = new Subject<void>();
emitAssignmentAddedEvent() {
  this.assignmentAdded.next();
}
assignmentAdded$ = new Subject<void>();

peuplerBDavecForkJoin(): Observable<any> {
  let appelsVersAddAssignment: Observable<any>[] = [];

  assignmentsData.forEach(a => {
    const nouvelAssignment = new Assignment();
    nouvelAssignment.id = a.id;
    nouvelAssignment.nom = a.nom;
    nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
    nouvelAssignment.rendu = a.rendu as boolean;
    nouvelAssignment.auteur = a.auteur;
    nouvelAssignment.note = a.note;
    nouvelAssignment.remarques = a.remarques;
    nouvelAssignment.matiere = a.matiere;

    const observable = this.addAssignment(nouvelAssignment);

    // Émettez un événement après chaque ajout de devoir
    observable.subscribe(() => {
      this.assignmentAdded$.next();
    });

    appelsVersAddAssignment.push(observable);
  });

  return forkJoin(appelsVersAddAssignment);
}


//getAssignments():Observable<Assignment[]>{                         //ReSTORE this to work without URL
//  return of(this.assignments);
//}


 //uri = "https://api-cours-angular-2023.herokuapp.com/api/assignments";
  // renvoie comme Observable l'assignment dont l'id est passé
  // en paramètre, ou undefined s'il n'existe pas
  getAssignment(id:number):Observable<Assignment|undefined> {
    return this.http.get<Assignment>(this.url+"/"+id)
    .pipe(
      tap(a => {
        console.log("tap: " + a.nom)
      }),
      map(x => {
        x.nom += " MODIFIE PAR PIPE MAP";
        return x;
      }),
      catchError(this.handleError<any>('### catchError: getAssignments by id avec id=' + id))
    );
  }

  private handleError<T>(operation : any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); 
      console.log(operation + " a échoué " + error.message);
      return of(result as T);
    };
  }

  addAssignment(assignment:Assignment):Observable<any> {
    this.logginService.log(assignment.nom, "ajouté !");
    return this.http.post<Assignment>(this.url, assignment);
  }

  getAssignmentsUpdateListener(){
  return this.assignmentsUpdated.asObservable();
  }

  updateAssignment(assignment:Assignment):Observable<any> {
    return this.http.post<Assignment>(this.url, assignment);
  }

  deleteAssignement(assignment:Assignment) :Observable<any> {
    this.logginService.log(assignment.nom, "supprimé !");
    return this.http.delete(this.url+"/"+assignment._id);
  }

  deleteAllAssignments(): Observable<any> {
    return this.http.delete(this.url);
  }
  // assignments.service.ts
// getAssignmentsPagine(page: number, limit: number): Observable<any> {
//   return this.http.get<any>(this.url + '?page=' + page + '&limit=' + limit);
// }

getAssignmentsPagine(page: number, limit: number): Observable<any> {
  return this.http.get<any>(this.url + '?page=' + page + '&limit=' + limit)
    .pipe(
      tap((data) => {
        // Après avoir récupéré les devoirs, mettez à jour la propriété professeurImage
        data.docs.forEach((assignment: Assignment) => {
          assignment.professeurImage = this.matieresWithImages[assignment.matiere] || '';
        });
      })
    );
}
}