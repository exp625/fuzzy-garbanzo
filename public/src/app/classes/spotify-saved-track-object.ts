import {SpotifyTrackObjectFull} from './spotify-track-object-full';

export class SpotifySavedTrackObject {
  constructor(
    //
    public added_at: timestamp,
    // Information about the track.
    public track: SpotifyTrackObjectFull,
  ) {
  }
}
