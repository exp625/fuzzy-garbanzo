import {SpotifyTrackObjectSimplified} from './spotify-track-object-simplified';
import {SpotifyRecommendationsSeedObject} from './spotify-recommendations-seed-object';

export class SpotifyRecommendationsObject {
  constructor(
    // An array of recommendation seed objects.
    public seeds: Array<SpotifyRecommendationsSeedObject>,
    // An array of track object (simplified) ordered according to the parameters supplied.
    public tracks: Array<SpotifyTrackObjectSimplified>,
  ) {
  }
}
