import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { dataComments } from './config/comments';
import { IComment } from './models/comments';
import { CommentsService } from './services/comments.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  comments: IComment[] = [];
  loading: boolean = false;
  search: string = '';
  constructor(
    public CommentsService: CommentsService,
    public modalService: ModalService
  ) {}
  comments$: Observable<IComment[]>;
  ngOnInit(): void {
    this.loading = true;
    // this.comments$ = this.CommentsService.getAll().pipe(
    //   tap(() => (this.loading = false))
    // );
    this.CommentsService.getAll().subscribe((com) => {
      // this.comments = com;
      this.loading = false;
    });
  }
  share() {
    alert('Product');
  }
}
