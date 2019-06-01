export class SpotifyArtistObjectFull {
    constructor(
        // Known external URLs for this artist.
         public external_urls: ExternalUrlObject,
        // Information about the followers of the artist.
         public followers: FollowersObject,
        // A list of the genres the artist is associated with. For example: "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty.)
         public genres: array of strings,
        // A link to the Web API endpoint providing full details of the artist.
         public href: string,
        // The Spotify ID for the artist.
         public id: string,
        // Images of the artist in various sizes, widest first.
         public images: array of image objects,
        // The name of the artist
         public name: string,
        // The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist’s popularity is calculated from the popularity of all the artist’s tracks.
         public popularity: number,
        // The object type: "artist"
         public type: string,
        // The Spotify URI for the artist.
         public uri: string,
    ) {}
}