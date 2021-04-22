import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'

@Injectable()

export class TicketsService {

    constructor(private httpReq: HttpClient) { }

    getTicketData() {
        let api = 'https://cinema-c1a26-default-rtdb.firebaseio.com/tickets.json';

        return this.httpReq.get(api)
            .pipe(map(
                (responseData: any) => {
                    const dataArr = [];
                    for (const key in responseData) {
                        dataArr.push({ ...responseData[key] })
                    }
                    return dataArr
                }
            ))
    }
}