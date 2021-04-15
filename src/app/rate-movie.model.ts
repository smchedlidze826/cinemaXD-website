export class MovieRating {
    movieTitle: string;
    rating: number;
    name: string;
    text: string;
    constructor(movieTitle: string, rating: number, name: string, text: string) {
        this.movieTitle = movieTitle;
        this.rating = rating;
        this.name = name;
        this.text = text
    }
}