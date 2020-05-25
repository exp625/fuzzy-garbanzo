import {SpotifyImage} from './spotify-image';

export class SpotifyCategory {
  constructor(
    // A link to the Web API endpoint returning full details of the category.
    public href: string,
    // The category icon, in various sizes.
    public icons: SpotifyImage,
    // The Spotify category ID of the category.
    public id: string,
    // The name of the category.
    public name: string,
  ) {
  }
}
