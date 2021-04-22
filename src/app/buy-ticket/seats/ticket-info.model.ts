export class TicketInfo {
    id: number;
    movieTitle: string;
    session: number;
    date: number;
    ticket: { seat: number, row: number }[];
    constructor(id: number, movieTitle: string, session: number, date: number, ticket: { seat: number, row: number }[]) {
        this.id = id;
        this.movieTitle = movieTitle;
        this.session = session;
        this.date = date;
        this.ticket = ticket;
    }
}