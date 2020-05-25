import {SpotifyTrackSimplified} from './spotify-track-simplified';
import {SpotifyRecommendationSeed} from './spotify-recommendation-seed';

export class SpotifyRecommendation {
  constructor(
    // An array of recommendation seed objects.
    public seeds: Array<SpotifyRecommendationSeed>,
    // An array of track object (simplified) ordered according to the parameters supplied.
    public tracks: Array<SpotifyTrackSimplified>,
  ) {
  }
}
