import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieData } from 'src/app/shared-models/movie-data.model';
import { GetMovieDataService } from 'src/app/shared-services/getMovieData.service';
import { TicketInfo } from './ticket-info.model';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css'],
})
export class SeatsComponent implements OnInit {
  @ViewChild('seat', { static: false }) seat: ElementRef;
  @Input() selectedMovie: MovieData;
  @Input() selectedSession: number;
  rowsArr = [1, 2, 3, 4, 5, 6, 7, 8];
  seatsArr = [1, 2, 3, 4, 5, 6, 7, 8];
  selected: boolean = false;
  selectedSeatsArr: TicketInfo[] = [];
  ticketInfo: TicketInfo;
  api = 'https://cinema-c1a26-default-rtdb.firebaseio.com/tickets.json';
  tmpArr: { seat: number, row: number }[] = [];


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private ticketData: GetMovieDataService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.ticketData.getMovieData(this.api)
      .subscribe(
        ticketData => {
          console.log(ticketData)
        }
      )
  }

  onClickBuy() {
    this.generateTicketInfo();
    this.http.post(this.api, this.ticketInfo)
      .subscribe(
        (resp: any) => {
          console.log("ticket was bought succesfuly")
        }
      )
  }
  generateTicketInfo() {
    let actRoute = this.route.snapshot.params;
    this.ticketInfo = new TicketInfo(
      actRoute.id,
      this.selectedMovie.title,
      this.selectedSession,
      actRoute.date,
      this.tmpArr)
    this.selectedSeatsArr.push(this.ticketInfo);
    this.tmpArr = [];
  }

  occupiedSeats: ElementRef[];

  onClickSelect(seat: number, row: number) {
    let seatObj = {
      seat: seat,
      row: row
    }
    if (this.tmpArr.length > 0) {
      for (let i in this.tmpArr) {
        if (this.tmpArr[i] !== seatObj) {
          this.tmpArr.push(seatObj);
        }
      } return this.tmpArr;
    } else {
      this.tmpArr.push(seatObj);
      return this.tmpArr;
    }
  }
}

