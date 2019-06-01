export class SpotifyArtistObjectSimplified {
    constructor(
        // Known external URLs for this artist.
         public external_urls: ExternalUrlObject,
        // A link to the Web API endpoint providing full details of the artist.
         public href: string,
        // The Spotify ID for the artist.
         public id: string,
        // The name of the artist
         public name: string,
        // The object type: "artist"
         public type: string,
        // The Spotify URI for the artist.
         public uri: string,
    ) {}
}