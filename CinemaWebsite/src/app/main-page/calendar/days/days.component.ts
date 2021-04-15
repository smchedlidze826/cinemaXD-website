import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  // today: number = Date.now();
  date = new Date()
  incr = this.date.getDay() ? this.date.getDay() - 1 : 6
  monday = new Date(this.date.getTime() - this.incr * 24 * 60 * 60 * 1000)
  week = [0, 1, 2, 3, 4, 5, 6].map(x => new Date(this.monday.getTime() + x * 24 * 60 * 60 * 1000));
  selectedDate: number = 0
  constructor() { }

  ngOnInit(): void {
    this.selectedDate = this.incr
  }

}
