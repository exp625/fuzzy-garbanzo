export class SpotifyPaging {
  constructor(
    // A link to the Web API endpoint returning the full result of the request.
    public href: string,
    // The requested data.
    public items: Array<object>,
    // The maximum number of items in the response (as set in the query or by default).
    public limit: number,
    // URL to the next page of items. ( null if none)
    public next: string,
    // The offset of the items returned (as set in the query or by default).
    public offset: number,
    // URL to the previous page of items. ( null if none)
    public previous: string,
    // The maximum number of items available to return.
    public total: number,
  ) {
  }
}
