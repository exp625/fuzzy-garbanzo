import {SpotifyImageObject} from './spotify-image-object';

export class SpotifyCategoryObject {
  constructor(
    // A link to the Web API endpoint returning full details of the category.
    public href: string,
    // The category icon, in various sizes.
    public icons: SpotifyImageObject,
    // The Spotify category ID of the category.
    public id: string,
    // The name of the category.
    public name: string,
  ) {
  }
}
