import {SpotifyTrackObjectSimplified} from './spotify-track-object-simplified';
import {SpotifyContextObject} from './spotify-context-object';
import {Timestamp} from './timestamp';

export class SpotifyPlayHistoryObject {
  constructor(
    // The track the user listened to.
    public track: SpotifyTrackObjectSimplified,
    // The date and time the track was played.
    public played_at: Timestamp,
    // The context the track was played from.
    public context: SpotifyContextObject,
  ) {
  }
}
