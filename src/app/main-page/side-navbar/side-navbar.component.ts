import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetMovieDataService } from 'src/app/shared-services/getMovieData.service';
import { MovieData } from 'src/app/shared-models/movie-data.model';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  @Output() onClickEmit: EventEmitter<number> = new EventEmitter()
  dataArr: MovieData[] = [];


  constructor(private getMovieData: GetMovieDataService) { }

  ngOnInit(): void {
    let api = 'https://cinema-c1a26-default-rtdb.firebaseio.com/movies.json'
    this.getMovieData.getMovieData(api)
      .subscribe((response: any) => {
        this.dataArr = response
      })
  }

  onClick(num: number) {
    this.onClickEmit.emit(num)
  }

}
