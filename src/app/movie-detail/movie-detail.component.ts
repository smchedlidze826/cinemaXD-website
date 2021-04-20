import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMovieDataService } from '../shared-services/getMovieData.service';
import { MovieData } from '../shared-models/movie-data.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @ViewChild('video', { static: false }) video: ElementRef;
  movieArr: MovieData[] = [];
  selectedMovie: MovieData;
  movieDataIsLoaded: boolean;
  session: number;
  openTicketOptions: boolean = false;
  canBeWatched: boolean;
  isPlaying: boolean = true;


  constructor(
    private route: ActivatedRoute,
    private getMovieData: GetMovieDataService,
  ) { }

  ngOnInit(): void {
    let api;
    let state = this.route.snapshot.params.id2;
    state == 1 ? this.canBeWatched = true : 'none';
    this.session = this.route.snapshot.params.session;
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

  playPause() {
    this.isPlaying ? this.video.nativeElement.pause() : this.video.nativeElement.play();
    this.isPlaying = !this.isPlaying;
  }
}
