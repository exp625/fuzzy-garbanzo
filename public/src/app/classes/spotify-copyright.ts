export class SpotifyCopyright {
  constructor(
    // The copyright text for this album.
    public text: string,
    // The type of copyright: C = the copyright, P = the sound recording (performance) copyright.
    public type: string,
  ) {
  }
}
