export class SpotifySavedAlbumObject {
  constructor(
    //  
    public added_at: timestamp,
    // Information about the album.
    public album: SpotifyAlbumObject,
  ) {
  }
}
