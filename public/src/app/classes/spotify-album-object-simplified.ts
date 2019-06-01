import {SpotifyArtistObjectSimplified} from './spotify-artist-object-simplified';
import {SpotifyExternalUrlObject} from './spotify-external-URL-object';
import {SpotifyImageObject} from './spotify-image-object';
import {SpotifyRestrictionsObject} from './spotify-restrictions-object';

export class SpotifyAlbumObjectSimplified {
  constructor(
    // The field is present when getting an artist’s albums. Possible values are “album”, “single”, “compilation”, “appears_on”. Compare to album_type this field represents relationship between the artist and the album.
    public album_group: string,
    // The type of the album: one of “album”, “single”, or “compilation”.
    public album_type: string,
    // The artists of the album. Each artist object includes a link in href to more detailed information about the artist.
    public artists: Array<SpotifyArtistObjectSimplified>,
    // The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
    public available_markets: Array<string>,
    // Known external URLs for this album.
    public external_urls: SpotifyExternalUrlObject,
    // A link to the Web API endpoint providing full details of the album.
    public href: string,
    // The [/documentation/web-api/#spotify-uris-and-ids) for the album.
    public id: string,
    // The cover art for the album in various sizes, widest first.
    public images: Array<SpotifyImageObject>,
    // The name of the album. In case of an album takedown, the value may be an empty string.
    public name: string,
    // The date the album was first released, for example 1981. Depending on the precision, it might be shown as 1981-12 or 1981-12-15.
    public release_date: string,
    // The precision with which release_date value is known: year , month , or day.
    public release_date_precision: string,
    // Part of the response when Track Relinking is applied, the original track is not available in the given market, and Spotify did not have any tracks to relink it with. The track response will still contain metadata for the original track, and a restrictions object containing the reason why the track is not available: "restrictions" : {"reason" : "market"}
    public restrictions: SpotifyRestrictionsObject,
    // The object type: “album”
    public type: string,
    // The Spotify URI for the album.
    public uri: string,
  ) {
  }
}
