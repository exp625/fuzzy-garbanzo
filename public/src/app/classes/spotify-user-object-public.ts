export class SpotifyUserObjectPublic {
    constructor(
        // The name displayed on the user’s profile. null if not available.
         public display_name: string,
        // Known public external URLs for this user.
         public external_urls: ExternalUrlObject,
        // Information about the followers of this user.
         public followers: FollowersObject,
        // A link to the Web API endpoint for this user.
         public href: string,
        // The Spotify user ID for this user.
         public id: string,
        // The user’s profile image.
         public images: array of image objects,
        // The object type: “user”
         public type: string,
        // The Spotify URI for this user.
         public uri: string,
    ) {}
}