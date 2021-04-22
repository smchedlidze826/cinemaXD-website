import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { MovieData } from '../shared-models/movie-data.model';
import { Subject } from 'rxjs';
import { TicketInfo } from '../buy-ticket/seats/ticket-info.model';


@Injectable()

export class GetMovieDataService {
    date = new Date();
    incr = this.date.getDay() ? this.date.getDay() - 1 : 6;
    monday = new Date(this.date.getTime() - this.incr * 24 * 60 * 60 * 1000);
    week = [0, 1, 2, 3, 4, 5, 6].map(x => new Date(this.monday.getTime() + x * 24 * 60 * 60 * 1000));

    ticketInfo: TicketInfo[] = [];
    ticketWasBought = new Subject<boolean>();
    selectedDate: number = this.incr;
    selectedDateWasChanged = new Subject<number>();



    constructor(private httpReq: HttpClient) { }

    getMovieData(api: string) {
        return this.httpReq.get(api)
            .pipe(map(
                (responseData: any) => {
                    const movieDataArr = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            movieDataArr.push({ ...responseData[key], id: key })
                        }
                    }
                    this.ticketInfo = movieDataArr
                    return movieDataArr
                }
            ))

    }


}