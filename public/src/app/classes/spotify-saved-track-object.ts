import {SpotifyTrackObjectFull} from './spotify-track-object-full';
import {Timestamp} from './timestamp';

export class SpotifySavedTrackObject {
  constructor(
    //
    public added_at: Timestamp,
    // Information about the track.
    public track: SpotifyTrackObjectFull,
  ) {
  }
}
