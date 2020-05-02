import { Team } from '@ipl/interfaces';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';

interface SearchTeamResults {
  teams: Team[];
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl = 'api/teams';

  constructor(private readonly http: HttpClient) {}

  public searchTeam(term: string = ''): Observable<Team[]> {
    term = term.trim();

    const options = term ? { params: new HttpParams().set('term', term) } : {};

    const results = this.http.get<SearchTeamResults>(this.teamUrl, options);
    console.log('service');
    const teams = results.pipe(
      map((searchResult: SearchTeamResults) => searchResult),
      catchError(this.handleError)
    ) as Observable<Team[]>;
    return teams;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //client side or network error occurred . Handle it accordingly.
      console.error('An error occured:', error.error.message);
    } else {
      //the backend returned an unsuccessful response code.
      //The response body may contain clues as to what was wrong
      console.log(
        `Backend return code ${error.status}, body was :${error.message}`
      );
    }
    return throwError('Something bad happened;Please try again later');
  }
}
