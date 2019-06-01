export class SpotifyRecommendationsObject {
    constructor(
        // An array of recommendation seed objects.
         public seeds: array,
        // An array of track object (simplified) ordered according to the parameters supplied.
         public tracks: array,
    ) {}
}