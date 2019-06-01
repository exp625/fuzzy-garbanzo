export class SpotifyErrorObject {
  constructor(
    // The HTTP status code (also returned in the response header; see Response Status Codes for more information).
    public status: number,
    // A short description of the cause of the error.
    public message: string,
  ) {
  }
}
