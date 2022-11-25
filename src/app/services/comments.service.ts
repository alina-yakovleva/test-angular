import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IComment } from '../models/comments';
import { delay } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  // Для автоматической регистрации в корневом модуле
  providedIn: 'root',
})
export class CommentsService {
  comments: IComment[] = [];
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<IComment[]> {
    return (
      this.http
        .get<IComment[]>('https://jsonplaceholder.typicode.com/comments', {
          // params: new HttpParams().append('limit', 3),
          params: new HttpParams({
            //   fromString: 'limit=5',
            fromObject: { limit: 5 },
          }),
        })
        // Замедление
        .pipe(
          delay(2000),
          tap((com) => (this.comments = com)),
          catchError(this.errorHandler.bind(this))
        )
    );
  }
  create(comment: IComment): Observable<IComment> {
    return this.http
      .post<IComment>('https://jsonplaceholder.typicode.com/comments', comment)
      .pipe(
        tap((com) => {
          this.comments.push(com);
          console.log(this.comments);
        })
      );
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
