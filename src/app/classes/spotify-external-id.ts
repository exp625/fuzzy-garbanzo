export class SpotifyExternalId {
  constructor(
    // The identifier type, for example:- "isrc" - International Standard Recording Code
    // - "ean" - International Article Number- "upc" - Universal Product Code
    public key: string,
    // An external identifier for the object.
    public value: string,
  ) {
  }
}
