import {SpotifyImage} from './spotify-image';
import {SpotifyFollower} from './spotify-follower';
import {SpotifyExternalUrl} from './spotify-external-url';

export class SpotifyUserPublic {
  constructor(
    // The name displayed on the user’s profile. null if not available.
    public display_name: string,
    // Known public external URLs for this user.
    public external_urls: SpotifyExternalUrl,
    // Information about the followers of this user.
    public followers: SpotifyFollower,
    // A link to the Web API endpoint for this user.
    public href: string,
    // The Spotify user ID for this user.
    public id: string,
    // The user’s profile image.
    public images: Array<SpotifyImage>,
    // The object type: “user”
    public type: string,
    // The Spotify URI for this user.
    public uri: string,
  ) {
  }
}
