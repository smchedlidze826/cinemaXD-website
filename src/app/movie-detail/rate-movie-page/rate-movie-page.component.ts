import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieData } from 'src/app/shared-models/movie-data.model';
import { MovieRating } from 'src/app/shared-models/rate-movie.model';

@Component({
  selector: 'app-rate-movie-page',
  templateUrl: './rate-movie-page.component.html',
  styleUrls: ['./rate-movie-page.component.css']
})
export class RateMoviePageComponent implements OnInit {
  @ViewChild('f', { static: false }) formData: NgForm;
  @Input() selectedMovie: MovieData;
  currentRate: number = 6;
  comment: MovieRating;
  commentArr: MovieRating[] = [];
  commentWasAdded: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    console.log(form.valid)
    if (form.valid) {
      this.comment = new MovieRating(
        this.selectedMovie.title,
        this.currentRate,
        form.value.name,
        form.value.text
      )
      let api = 'https://cinema-c1a26-default-rtdb.firebaseio.com/comments.json'
      this.http.post(
        api, this.comment
      ).subscribe(
        (responsData: any) => {
          console.log(responsData)
          this.formData.reset();
        }
      )
      this.commentWasAdded = true
      setTimeout(() => this.commentWasAdded = false, 2000)
    }
  }
}
