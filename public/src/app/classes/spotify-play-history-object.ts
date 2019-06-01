import {SpotifyTrackObjectSimplified} from './spotify-track-object-simplified';
import {SpotifyContextObject} from './spotify-context-object';

export class SpotifyPlayHistoryObject {
  constructor(
    // The track the user listened to.
    public track: SpotifyTrackObjectSimplified,
    // The date and time the track was played.
    public played_at: timestamp,
    // The context the track was played from.
    public context: SpotifyContextObject,
  ) {
  }
}
