import {SpotifyImage} from './spotify-image';
import {SpotifyFollower} from './spotify-follower';
import {SpotifyExternalUrl} from './spotify-external-url';

export class SpotifyUserPrivate {
  constructor(
    // The user’s date-of-birth.This field is only available when the current user has granted access to
    // the user-read-birthdate scope.
    public birthdate: string,
    // The country of the user, as set in the user’s account profile. An ISO 3166-1 alpha-2 country code.
    // This field is only available when the current user has granted access to the user-read-private scope.
    public country: string,
    // The name displayed on the user’s profile. null if not available.
    public display_name: string,
    // The user’s email address, as entered by the user when creating their account.Important! This email
    // address is unverified; there is no proof that it actually belongs to the user.This field is only
    // available when the current user has granted access to the user-read-email scope.
    public email: string,
    // Known external URLs for this user.
    public external_urls: SpotifyExternalUrl,
    // Information about the followers of the user.
    public followers: SpotifyFollower,
    // A link to the Web API endpoint for this user.
    public href: string,
    // The Spotify user ID for the user
    public id: string,
    // The user’s profile image.
    public images: SpotifyImage,
    // The user’s Spotify subscription level: “premium”, “free”, etc. (The subscription level “open” can be
    // considered the same as “free”.)This field is only available when the current user has granted access to
    // the user-read-private scope.
    public product: string,
    // The object type: “user”
    public type: string,
    // The Spotify URI for the user.
    public uri: string,
  ) {
  }
}
