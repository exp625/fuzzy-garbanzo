export class SpotifyExternalUrlObject {
  constructor(
    // The type of the URL, for example:- "spotify" - The Spotify URL for the object.
    public key: string,
    // An external, public URL to the object.
    public value: string,
  ) {
  }
}
