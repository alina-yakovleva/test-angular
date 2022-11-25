import { Pipe, PipeTransform } from '@angular/core';
import { IComment } from '../models/comments';

@Pipe({
  name: 'filterComments',
})
export class FilterCommentsPipe implements PipeTransform {
  transform(comments: IComment[], search: string): IComment[] {
    console.log('search', search);
    return !search
      ? comments
      : comments.filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase())
        );
  }
}
