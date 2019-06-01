export class SpotifyPlaylistObjectFull {
    constructor(
        // Returns true if context is not search and the owner allows other users to modify the playlist. Otherwise returns false.
         public collaborative: boolean,
        // The playlist description. Only returned for modified, verified playlists, otherwise null.
         public description: string,
        // Known external URLs for this playlist.
         public external_urls: ExternalUrlObject,
        // Information about the followers of the playlist.
         public followers: a followers object,
        // A link to the Web API endpoint providing full details of the playlist.
         public href: string,
        // The Spotify ID for the playlist.
         public id: string,
        // Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See Working with Playlists.Note: If returned, the source URL for the image ( url ) is temporary and will expire in less than a day.
         public images: ImageObject,
        // The name of the playlist.
         public name: string,
        // The user who owns the playlist
         public owner: UserObjectPublic,
        // The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.
         public public: Boolean or null,
        // The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version: see Remove tracks from a playlist
         public snapshot_id: string,
        // Information about the tracks of the playlist.
         public tracks: array of playlist track objects inside a paging object,
        // The object type: “playlist”
         public type: string,
        // The Spotify URI for the playlist.
         public uri: string,
    ) {}
}