import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MovieData } from 'src/app/shared-models/movie-data.model';
import { CommentsService } from '../../shared-services/comments.service';
import { MovieRating } from '../../shared-models/rate-movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  currentRate: number = 5;
  commentsArr: MovieRating[];
  commentsLoaded: boolean;
  @Input() selectedMovie: MovieData;
  subsc: Subscription;
  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getCommentData()
      .subscribe(
        (responseData: any) => {
          this.commentsArr = responseData;
          this.commentsLoaded = true
        }
      )
    this.subsc = this.commentsService.commentsArrWasChanged
      .subscribe(
        (resp: any) => {
          console.log('submitted')
        }
      )
  }
  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

}
