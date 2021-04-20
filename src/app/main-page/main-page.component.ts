import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  clickedMovieIndex: number = 0;
  selectedDate: number;

  constructor() { }

  ngOnInit(): void {
  }
  getClickedMovieIndex(num: any) {
    this.clickedMovieIndex = num
  }

}
