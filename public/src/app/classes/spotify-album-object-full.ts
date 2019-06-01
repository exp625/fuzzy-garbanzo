import {SpotifyArtistObjectSimplified} from './spotify-artist-object-simplified';
import {SpotifyCopyrightObject} from './spotify-copyright-object';
import {SpotifyExternalIdObject} from './spotify-external-ID-object';
import {SpotifyExternalUrlObject} from './spotify-external-URL-object';
import {SpotifyImageObject} from './spotify-image-object';
import {SpotifyPagingObject} from './spotify-paging-object';
import {SpotifyRestrictionsObject} from './spotify-restrictions-object';

export class SpotifyAlbumObjectFull {
  constructor(
    // The type of the album: one of "album" , "single" , or "compilation".
    public album_type: string,
    // The artists of the album. Each artist object includes a link in href to more detailed information about the artist.
    public artists: Array<SpotifyArtistObjectSimplified>,
    // The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
    public available_markets: Array<string>,
    // The copyright statements of the album.
    public copyrights: Array<SpotifyCopyrightObject>,
    // Known external IDs for the album.
    public external_ids: SpotifyExternalIdObject,
    // Known external URLs for this album.
    public external_urls: SpotifyExternalUrlObject,
    // A list of the genres used to classify the album. For example: "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty.)
    public genres: Array<string>,
    // A link to the Web API endpoint providing full details of the album.
    public href: string,
    // The Spotify ID for the album.
    public id: string,
    // The cover art for the album in various sizes, widest first.
    public images: Array<SpotifyImageObject>,
    // The label for the album.
    public label: string,
    // The name of the album. In case of an album takedown, the value may be an empty string.
    public name: string,
    // The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album’s individual tracks.
    public popularity: number,
    // The date the album was first released, for example 1981. Depending on the precision, it might be shown as 1981-12 or 1981-12-15.
    public release_date: string,
    // The precision with which release_date value is known: year , month , or day.
    public release_date_precision: string,
    // Part of the response when Track Relinking is applied, the original track is not available in the given market, and Spotify did not have any tracks to relink it with. The track response will still contain metadata for the original track, and a restrictions object containing the reason why the track is not available: "restrictions" : {"reason" : "market"}
    public restrictions: SpotifyRestrictionsObject,
    // The tracks of the album.
    public tracks: SpotifyPagingObject,
    // The object type: “album”
    public type: string,
    // The Spotify URI for the album.
    public uri: string,
  ) {
  }
}
