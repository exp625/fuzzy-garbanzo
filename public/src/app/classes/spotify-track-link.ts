export class SpotifyTrackLink {
    constructor(
        // Known external URLs for this track.
         public external_urls: ExternalUrlObject,
        // A link to the Web API endpoint providing full details of the track.
         public href: string,
        // The Spotify ID for the track.
         public id: string,
        // The object type: “track”.
         public type: string,
        // The Spotify URI for the track.
         public uri: string,
    ) {}
}