import { Component, Input } from '@angular/core';

import { IComment } from 'src/app/models/comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  @Input() comment: IComment;
  title: string = 'Comments list';
  open: Boolean = false;
}
