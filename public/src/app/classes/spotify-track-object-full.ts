import {SpotifyArtistObjectSimplified} from './spotify-artist-object-simplified';
import {SpotifyAlbumObjectSimplified} from './spotify-album-object-simplified';
import {SpotifyExternalIdObject} from './spotify-external-ID-object';
import {SpotifyExternalUrlObject} from './spotify-external-URL-object';
import {SpotifyTrackLink} from './spotify-track-link';
import {SpotifyRestrictionsObject} from './spotify-restrictions-object';

export class SpotifyTrackObjectFull {
  constructor(
    // The album on which the track appears. The album object includes a link in href to full information
    // about the album.
    public album: SpotifyAlbumObjectSimplified,
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
    // Known external IDs for the track.
    public external_ids: SpotifyExternalIdObject,
    // Known external URLs for this track.
    public external_urls: SpotifyExternalUrlObject,
    // A link to the Web API endpoint providing full details of the track.
    public href: string,
    // The Spotify ID for the track.
    public id: string,
    // Part of the response when Track Relinking is applied. If true , the track is playable in the given market.
    // Otherwise false.
    public is_playable: boolean,
    // Part of the response when Track Relinking is applied, and the requested track has been replaced with
    // different track. The track in the linked_from object contains information about the originally requested track.
    public linked_from: SpotifyTrackLink,
    // Part of the response when Track Relinking is applied, the original track is not available in the given
    // market, and Spotify did not have any tracks to relink it with. The track response will still contain
    // metadata for the original track, and a restrictions object containing the reason why the track is not
    // available: "restrictions" : {"reason" : "market"}
    public restrictions: SpotifyRestrictionsObject,
    // The name of the track.
    public name: string,
    // The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.
    // The popularity of a track is a value between 0 and 100, with 100 being the most popular.
    // The popularity is calculated by algorithm and is based, in the most part, on the total number of plays
    // the track has had and how recent those plays are.Generally speaking, songs that are being played a lot
    // now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks
    // (e.g. the same track from a single and an album) are rated independently. Artist and album popularity
    // is derived mathematically from track popularity. Note that the popularity value may lag actual popularity
    // by a few days: the value is not updated in real time.
    public popularity: number,
    // A link to a 30 second preview (MP3 format) of the track. Can be null
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
