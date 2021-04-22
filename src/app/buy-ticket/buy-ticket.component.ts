import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  sessionsArr: string[] = [];
  selectedSession: number;
  selectedDate = this.incr;
  openSeats: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          params.session == undefined ? this.selectedSession = 0 : this.selectedSession = +params.session;
          this.selectedDate = +params.date;
        }
      );

    this.sessionsArr = [
      this.selectedMovie.morning,
      this.selectedMovie.evening,
      this.selectedMovie.night]
  }

  onClick(i: number) {
    this.router.navigate(['/movie-detail', {
      id: this.route.snapshot.params.id,
      id2: this.route.snapshot.params.id2,
      date: this.route.snapshot.params.date,
      session: i
    }])
  }

}
