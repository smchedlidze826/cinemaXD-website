import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/comments.service';
import { MovieRating } from 'src/app/rate-movie.model';

@Component({
  selector: 'app-side-comment',
  templateUrl: './side-comment.component.html',
  styleUrls: ['./side-comment.component.css']
})
export class SideCommentComponent implements OnInit {
  commentsArr: MovieRating[];
  commentsLoaded: boolean;
  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getCommentData()
      .subscribe(
        (responseData: any) => {
          this.commentsArr = responseData;
          this.commentsLoaded = true
        }
      )
  }

}
