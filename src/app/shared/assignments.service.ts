// assignments.service.ts
import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [];
  private assignmentsUpdated = new Subject<Assignment[]>();
  constructor(private logginService:LoggingService,
              private http:HttpClient) { }

//url = "http://localhost:8010/api/assignments";
url = "https://back-end-2023-angular.onrender.com/api/assignments"                                
getAssignments():Observable<Assignment[]>{
    return this.http.get<Assignment[]>(this.url);
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

}