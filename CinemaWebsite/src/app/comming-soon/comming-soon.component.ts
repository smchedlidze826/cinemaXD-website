import { Component, OnInit } from '@angular/core';
import { MovieData } from '../movie-data.model';
import { GetMovieDataService } from '../getMovieData.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.css']
})
export class CommingSoonComponent implements OnInit {
  dataArr: MovieData[] = [];
  wishListArr: MovieData[] = [];
  dataLoaded: boolean;


  constructor(
    private getMovieData: GetMovieDataService,
    private router: Router) { }

  ngOnInit(): void {
    let api = 'https://cinema-c1a26-default-rtdb.firebaseio.com/comming.json'
    this.getMovieData.getMovieData(api)
      .subscribe((response: any) => {
        this.dataArr = response
        this.dataLoaded = true
      })
  }
  onClickAddToWishList(num: number) {
    if (this.wishListArr.indexOf(this.dataArr[num]) === -1) {
      this.wishListArr.push(this.dataArr[num])
    }
  }
  onClick(id: number, state: number) {
    this.router.navigate(['movie-detail', { id: id, id2: state }])
  }

}
