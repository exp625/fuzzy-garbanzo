import {Timestamp} from './timestamp';
import {SpotifyAlbumObjectFull} from './spotify-album-object-full';

export class SpotifySavedAlbumObject {
  constructor(
    //
    public added_at: Timestamp,
    // Information about the album.
    public album: SpotifyAlbumObjectFull,
  ) {
  }
}
