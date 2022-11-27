import { Component, OnInit } from '@angular/core';

import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  loadedComments = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getComments()
      .subscribe((comments: any) => {
        this.loadedComments = comments.hits;
      });
  }
}
