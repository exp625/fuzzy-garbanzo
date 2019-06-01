import {SpotifyExternalUrlObject} from './spotify-external-URL-object';
import {SpotifyImageObject} from './spotify-image-object';
import {SpotifyTrackObjectFull} from './spotify-track-object-full';
import {SpotifyUserObjectPublic} from './spotify-user-object-public';

export class SpotifyPlaylistObjectSimplified {
  constructor(
    // Returns true if context is not search and the owner allows other users to modify the playlist.
    // Otherwise returns false.
    public collaborative: boolean,
    // Known external URLs for this playlist.
    public external_urls: SpotifyExternalUrlObject,
    // A link to the Web API endpoint providing full details of the playlist.
    public href: string,
    // The Spotify ID for the playlist.
    public id: string,
    // Images for the playlist. The array may be empty or contain up to three images. The images are returned
    // by size in descending order. See Working with Playlists.Note: If returned, the source URL
    // for the image ( url ) is temporary and will expire in less than a day.
    public images: SpotifyImageObject,
    // The name of the playlist.
    public name: string,
    // The user who owns the playlist
    public owner: SpotifyUserObjectPublic,
    // The playlist’s public/private status: true the playlist is public, false the playlist is private, null
    // the playlist status is not relevant. For more about public/private status, see Working with Playlists.
    public public_: boolean,
    // The version identifier for the current playlist. Can be supplied in other requests to target a
    // specific playlist version
    public snapshot_id: string,
    // A collection containing a link ( href ) to the Web API endpoint where full details of the
    // playlist’s tracks can be retrieved, along with the total number of tracks in the playlist.
    public tracks: Array<SpotifyTrackObjectFull>,
    // The object type: “playlist”
    public type: string,
    // The Spotify URI for the playlist.
    public uri: string,
  ) {
  }
}
