import { Component, Input, OnInit } from '@angular/core';
import { MovieData } from 'src/app/shared-models/movie-data.model';
import { CommentsService } from '../../shared-services/comments.service';
import { MovieRating } from '../../shared-models/rate-movie.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  currentRate: number = 5;
  commentsArr: MovieRating[];
  commentsLoaded: boolean;
  @Input() selectedMovie: MovieData;

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
