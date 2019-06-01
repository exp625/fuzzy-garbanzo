export class SpotifyCursor-BasedPagingObject {
    constructor(
        // A link to the Web API endpoint returning the full result of the request.
         public href: string,
        // The requested data.
         public items: an array of objects,
        // The maximum number of items in the response (as set in the query or by default).
         public limit: number,
        // URL to the next page of items. ( null if none)
         public next: string,
        // The cursors used to find the next set of items.
         public cursors: CursorObject,
        // The maximum number of items available to return.
         public total: number,
    ) {}
}