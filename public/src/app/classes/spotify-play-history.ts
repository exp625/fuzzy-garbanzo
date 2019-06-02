import {SpotifyTrackSimplified} from './spotify-track-simplified';
import {SpotifyContext} from './spotify-context';
import {Timestamp} from './timestamp';

export class SpotifyPlayHistory {
  constructor(
    // The track the user listened to.
    public track: SpotifyTrackSimplified,
    // The date and time the track was played.
    public played_at: Timestamp,
    // The context the track was played from.
    public context: SpotifyContext,
  ) {
  }
}
