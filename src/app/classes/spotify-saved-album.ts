import {Timestamp} from './timestamp';
import {SpotifyAlbumFull} from './spotify-album-full';

export class SpotifySavedAlbum {
  constructor(
    //
    public added_at: Timestamp,
    // Information about the album.
    public album: SpotifyAlbumFull,
  ) {
  }
}
