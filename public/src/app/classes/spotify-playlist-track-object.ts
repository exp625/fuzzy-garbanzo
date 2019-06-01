import {SpotifyTrackObjectFull} from './spotify-track-object-full';
import {Timestamp} from './timestamp';
import {SpotifyUserObjectPublic} from './spotify-user-object-public';

export class SpotifyPlaylistTrackObject {
  constructor(
    // The date and time the track was added.Note that some very old playlists may return null in this field.
    public added_at: Timestamp,
    // The Spotify user who added the track.Note that some very old playlists may return null in this field.
    public added_by: SpotifyUserObjectPublic,
    // Whether this track is a local file or not.
    public is_local: boolean,
    // Information about the track.
    public track: SpotifyTrackObjectFull,
  ) {
  }
}
