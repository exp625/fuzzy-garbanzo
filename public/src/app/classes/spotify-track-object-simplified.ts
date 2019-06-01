import {SpotifyArtistObjectSimplified} from './spotify-artist-object-simplified';
import {SpotifyExternalUrlObject} from './spotify-external-URL-object';
import {SpotifyTrackLink} from './spotify-track-link';
import {SpotifyRestrictionsObject} from './spotify-restrictions-object';

export class SpotifyTrackObjectSimplified {
  constructor(
    // The artists who performed the track. Each artist object includes a link in href to more detailed
    // information about the artist.
    public artists: SpotifyArtistObjectSimplified,
    // A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code.
    public available_markets: Array<string>,
    // The disc number (usually 1 unless the album consists of more than one disc).
    public disc_number: number,
    // The track length in milliseconds.
    public duration_ms: number,
    // Whether or not the track has explicit lyrics ( true = yes it does; false = no it does not OR unknown).
    public explicit: boolean,
    // External URLs for this track.
    public external_urls: SpotifyExternalUrlObject,
    // A link to the Web API endpoint providing full details of the track.
    public href: string,
    // The Spotify ID for the track.
    public id: string,
    // Part of the response when Track Relinking is applied. If true , the track is playable in the given market.
    // Otherwise false.
    public is_playable: boolean,
    // Part of the response when Track Relinking is applied and is only part of the response if the track linking,
    // in fact, exists. The requested track has been replaced with a different track. The track in the linked_from
    // object contains information about the originally requested track.
    public linked_from: SpotifyTrackLink,
    // Part of the response when Track Relinking is applied, the original track is not available in the given market,
    // and Spotify did not have any tracks to relink it with. The track response will still contain metadata for the
    // original track, and a restrictions object containing the reason why the track is
    // not available: "restrictions" : {"reason" : "market"}
    public restrictions: SpotifyRestrictionsObject,
    // The name of the track.
    public name: string,
    // A URL to a 30 second preview (MP3 format) of the track.
    public preview_url: string,
    // The number of the track. If an album has several discs, the track number is the number on the specified disc.
    public track_number: number,
    // The object type: “track”.
    public type: string,
    // The Spotify URI for the track.
    public uri: string,
    // Whether or not the track is from a local file.
    public is_local: boolean,
  ) {
  }
}
