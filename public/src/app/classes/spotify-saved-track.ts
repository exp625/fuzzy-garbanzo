import {SpotifyTrackFull} from './spotify-track-full';
import {Timestamp} from './timestamp';

export class SpotifySavedTrack {
  constructor(
    //
    public added_at: Timestamp,
    // Information about the track.
    public track: SpotifyTrackFull,
  ) {
  }
}
