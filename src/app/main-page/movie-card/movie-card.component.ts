import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetMovieDataService } from 'src/app/getMovieData.service';
import { MovieData } from 'src/app/movie-data.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  dataArr: MovieData[];
  wishListArr: MovieData[] = [];

  constructor(
    private getMovieData: GetMovieDataService,
    private router: Router) { }

  ngOnInit(): void {
    let api = 'https://cinema-c1a26-default-rtdb.firebaseio.com/movies.json'
    this.getMovieData.getMovieData(api)
      .subscribe((response: MovieData[]) => {
        this.dataArr = response;
      })
  }


  onClickAddToWishList(num: number) {
    if (this.wishListArr.indexOf(this.dataArr[num]) === -1) {
      this.wishListArr.push(this.dataArr[num])
    }
  }
  openMovieInfo(id: number, state: number) {
    this.router.navigate(['movie-detail', { id: id, id2: state }])
  }
}
