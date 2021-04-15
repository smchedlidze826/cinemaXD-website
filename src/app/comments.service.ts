import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MovieRating } from "./rate-movie.model";
import { map } from 'rxjs/operators'
import { Subject } from "rxjs";

@Injectable()

export class CommentsService {
    commentsArrWasChanged = new Subject<MovieRating[]>()
    commentsArr: MovieRating[];

    constructor(private httpReq: HttpClient) { }

    getCommentData() {
        let api = 'https://cinema-c1a26-default-rtdb.firebaseio.com/comments.json'
        return this.httpReq.get(api)
            .pipe(map(
                (responseData: any) => {
                    const dataArr = [];
                    for (const key in responseData) {
                        dataArr.push({ ...responseData[key] })
                    }
                    this.commentsArr = dataArr
                    return dataArr
                }
            ))
    }
}