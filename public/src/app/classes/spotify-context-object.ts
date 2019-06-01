import {SpotifyExternalUrlObject} from './spotify-external-URL-object';

export class SpotifyContextObject {
  constructor(
    // The object type, e.g. “artist”, “playlist”, “album”.
    public type: string,
    // A link to the Web API endpoint providing full details of the track.
    public href: string,
    // External URLs for this context.
    public external_urls: SpotifyExternalUrlObject,
    // The Spotify URI for the context.
    public uri: string,
  ) {
  }
}
