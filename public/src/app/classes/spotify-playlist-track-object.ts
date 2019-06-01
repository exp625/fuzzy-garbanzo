import {SpotifyTrackObjectFull} from './spotify-track-object-full';

export class SpotifyPlaylistTrackObject {
  constructor(
    // The date and time the track was added.Note that some very old playlists may return null in this field.
    public added_at: timestamp,
    // The Spotify user who added the track.Note that some very old playlists may return null in this field.
    public added_by: SpotifyUserObject,
    // Whether this track is a local file or not.
    public is_local: boolean,
    // Information about the track.
    public track: SpotifyTrackObjectFull,
  ) {
  }
}
