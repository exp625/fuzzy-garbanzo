export class SpotifyRecommendationsSeedObject {
  constructor(
    // The number of tracks available after min_* and max_* filters have been applied.
    public afterFilteringSize: number,
    // The number of tracks available after relinking for regional availability.
    public afterRelinkingSize: number,
    // A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be null.
    public href: string,
    // The id used to select this seed. This will be the same as the string used in the seed_artists , seed_tracks or seed_genres parameter.
    public id: string,
    // The number of recommended tracks available for this seed.
    public initialPoolSize: number,
    // The entity type of this seed. One of artist , track or genre.
    public type: string,
  ) {
  }
}
