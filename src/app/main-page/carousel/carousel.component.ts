import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { GetMovieDataService } from 'src/app/getMovieData.service';
import { MovieData } from 'src/app/movie-data.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnChanges {
  @ViewChild('p', { static: false }) pauseBtn: ElementRef;
  @Input() selectedMovieIndex: number = 0;
  dataArr: MovieData[] = [];
  currentlySelectedMovie: MovieData;
  playWasClicked = false;
  playing = false
  dataLoaded = false

  constructor(private getMovieData: GetMovieDataService) { }

  ngOnInit() {
    let api = 'https://cinema-c1a26-default-rtdb.firebaseio.com/movies.json'
    this.getMovieData.getMovieData(api)
      .subscribe((data: MovieData[]) => {
        this.dataArr = data
        this.currentlySelectedMovie = this.dataArr[this.selectedMovieIndex];
        this.dataLoaded = true
      })

  }

  ngOnChanges(newVal: any) {
    this.changeMovieInfo(newVal.selectedMovieIndex.currentValue);
    this.playWasClicked = false
  }
  changeMovieInfo(num: number) {
    this.playing = false
    this.currentlySelectedMovie = this.dataArr[num];
  }

  onClickPause() {
    this.playing = !this.playing
    this.playing ? this.pauseBtn.nativeElement.pause() : this.pauseBtn.nativeElement.play()
  }
}
