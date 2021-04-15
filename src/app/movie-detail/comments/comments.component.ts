import { Component, Input, OnInit } from '@angular/core';
import { MovieData } from 'src/app/movie-data.model';
import { CommentsService } from '../../comments.service';
import { MovieRating } from '../../rate-movie.model';

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
