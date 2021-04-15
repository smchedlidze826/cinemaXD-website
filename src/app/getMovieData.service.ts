import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { MovieData } from './movie-data.model';


@Injectable()

export class GetMovieDataService {

    constructor(private httpReq: HttpClient) { }
    // arr: MovieData[] = []

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
                    // this.arr = movieDataArr
                    return movieDataArr
                }
            ))

    }


}