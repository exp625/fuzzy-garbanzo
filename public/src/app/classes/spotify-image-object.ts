export class SpotifyImageObject {
    constructor(
        // The image height in pixels. If unknown: null or not returned.
         public height: number,
        // The source URL of the image.
         public url: string,
        // The image width in pixels. If unknown: null or not returned.
         public width: number,
    ) {}
}