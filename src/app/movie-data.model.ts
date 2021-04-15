export class MovieData {
    title: string;
    director: string;
    imgUrl: string;
    duration: string;
    onlyAdult: boolean;
    imdbRating: string;
    imdbUrl: string;
    trailerUrl: string;
    description: string;
    state: number;
    morning: string;
    evening: string;
    night: string;
    constructor(
        title: string,
        director: string,
        imgUrl: string,
        duration: string,
        imdbRating: string,
        imdbUrl: string,
        trailerUrl: string,
        description: string,
        morning: string,
        evening: string,
        night: string,
        onlyAdult: boolean,
        state: number,
    ) {
        this.title = title;
        this.director = director;
        this.imgUrl = imgUrl;
        this.state = state;
        this.morning = morning
        this.evening = evening;
        this.night = night;
        this.duration = duration;
        this.onlyAdult = onlyAdult;
        this.imdbRating = imdbRating;
        this.imdbUrl = imdbUrl;
        this.trailerUrl = trailerUrl;
        this.description = description
    }
}
