import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>(''),
  });
  constructor(
    private commentService: CommentsService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  submit() {
    this.commentService
      .create({
        postId: 1,
        id: 3,
        name: this.form.value.title as string,
        body: 'bar',
        email: '123',
      })
      .subscribe(() => this.modalService.close());
  }
}
