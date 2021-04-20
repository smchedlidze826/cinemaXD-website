import { Component, OnInit, Output } from '@angular/core';
import { GetMovieDataService } from 'src/app/shared-services/getMovieData.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  date = new Date();
  incr = this.date.getDay() ? this.date.getDay() - 1 : 6;
  monday = new Date(this.date.getTime() - this.incr * 24 * 60 * 60 * 1000);
  week = [0, 1, 2, 3, 4, 5, 6].map(x => new Date(this.monday.getTime() + x * 24 * 60 * 60 * 1000));


  selectedDate: number = 0;

  constructor(private getMovieData: GetMovieDataService) { }

  ngOnInit(): void {
    this.selectedDate = this.incr;
    this.getMovieData.selectedDate = this.selectedDate;
  }

  onClickChangeDate(i: number) {
    this.selectedDate = i;
    this.getMovieData.selectedDate = this.selectedDate;
    this.getMovieData.selectedDateWasChanged.next(this.getMovieData.selectedDate)
  }



}
