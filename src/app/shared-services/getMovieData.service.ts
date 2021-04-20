import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { MovieData } from '../shared-models/movie-data.model';
import { Subject } from 'rxjs';


@Injectable()

export class GetMovieDataService {
    arr: MovieData[] = [];
    selectedDate: number;
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
                    this.arr = movieDataArr
                    return movieDataArr
                }
            ))

    }


}