import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetMovieDataService } from 'src/app/shared-services/getMovieData.service';
import { MovieData } from 'src/app/shared-models/movie-data.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit, OnDestroy {
  dataArr: MovieData[];
  wishListArr: MovieData[] = [];
  subsc: Subscription;

  constructor(
    private getMovieData: GetMovieDataService,
    private router: Router) { }

  ngOnInit(): void {

    let api = 'https://cinema-c1a26-default-rtdb.firebaseio.com/movies.json'
    this.getMovieData.getMovieData(api)
      .subscribe((response: MovieData[]) => {
        this.dataArr = response;
        console.log(response)
      })

    this.subsc = this.getMovieData.selectedDateWasChanged
      .subscribe(
        (resp: any) => {
          console.log(resp)
        }
      )
  }
  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

  onClickAddToWishList(num: number) {
    if (this.wishListArr.indexOf(this.dataArr[num]) === -1) {
      this.wishListArr.push(this.dataArr[num])
    }
  }
  openMovieInfo(id: number, state: number) {
    this.router.navigate(['/movie-detail', { id: id, id2: state, date: this.getMovieData.selectedDate }])
  }

  onClickNavigate(index: number, state: number, session: number) {
    this.router.navigate(['/movie-detail', {
      id: index,
      id2: state,
      date: this.getMovieData.selectedDate,
      session: session
    }])
  }

}
