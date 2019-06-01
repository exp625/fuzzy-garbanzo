export class SpotifyFollowersObject {
    constructor(
        // A link to the Web API endpoint providing full details of the followers; null if not available. Please note that this will always be set to null, as the Web API does not support it at the moment.
         public href: string,
        // The total number of followers.
         public total: number,
    ) {}
}