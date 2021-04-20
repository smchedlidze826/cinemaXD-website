import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieData } from '../shared-models/movie-data.model';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {
  date = new Date();
  incr = this.date.getDay() ? this.date.getDay() - 1 : 6;
  monday = new Date(this.date.getTime() - this.incr * 24 * 60 * 60 * 1000);
  week = [0, 1, 2, 3, 4, 5, 6].map(x => new Date(this.monday.getTime() + x * 24 * 60 * 60 * 1000));

  @Input() selectedMovie: MovieData;
  movieDataIsLoaded: boolean;
  sessionsArr: string[];
  selectedSession: number = 0;
  selectedDate = this.incr;
  openSeats: boolean = false;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.session != undefined) {
      this.selectedSession = this.route.snapshot.params.session;
      this.selectedDate = this.route.snapshot.params.date;
    }

    this.sessionsArr = [
      this.selectedMovie.morning,
      this.selectedMovie.evening,
      this.selectedMovie.night]
  }

  onClick(i: number) {
    this.selectedSession = i
  }

}
