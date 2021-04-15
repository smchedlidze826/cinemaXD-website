import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMovieDataService } from '../getMovieData.service';
import { MovieData } from '../movie-data.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieArr: MovieData[] = [];
  selectedMovie: MovieData;
  movieDataIsLoaded: boolean;

  constructor(
    private route: ActivatedRoute,
    private getMovieData: GetMovieDataService,
  ) { }

  ngOnInit(): void {
    let api;
    let state = this.route.snapshot.params.id2;
    let api1 = 'https://cinema-c1a26-default-rtdb.firebaseio.com/movies.json';
    let api2 = 'https://cinema-c1a26-default-rtdb.firebaseio.com/comming.json';
    state == '1' ? api = api1 : api = api2;
    this.getMovieData.getMovieData(api)
      .subscribe(
        (responseData: MovieData[]) => {
          this.movieArr = responseData;
          this.selectedMovie = this.movieArr[this.route.snapshot.params.id];
          this.movieDataIsLoaded = true;
        })
  }
}
