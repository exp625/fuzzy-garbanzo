export class SpotifyCursorObject {
    constructor(
        // The cursor to use as key to find the next page of items.
         public after: string,
    ) {}
}