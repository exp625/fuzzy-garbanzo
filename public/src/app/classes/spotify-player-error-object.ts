export class SpotifyPlayerErrorObject {
    constructor(
        // The HTTP status code. Either 404 NOT FOUND or 403 FORBIDDEN.  Also returned in the response header.
         public status: number,
        // A short description of the cause of the error.
         public message: string,
        // One of the predefined player error reasons.
         public reason: string,
    ) {}
}