import {SpotifyCursor} from './spotify-cursor';

export class SpotifyPagingCursorBased {
  constructor(
    // A link to the Web API endpoint returning the full result of the request.
    public href: string,
    // The requested data.
    public items: Array<object>,
    // The maximum number of items in the response (as set in the query or by default).
    public limit: number,
    // URL to the next page of items. ( null if none)
    public next: string,
    // The cursors used to find the next set of items.
    public cursors: SpotifyCursor,
    // The maximum number of items available to return.
    public total: number,
  ) {
  }
}
