export class SpotifyPlayHistoryObject {
    constructor(
        // The track the user listened to.
         public track: TrackObjectSimplified,
        // The date and time the track was played.
         public played_at: timestamp,
        // The context the track was played from.
         public context: ContextObject,
    ) {}
}