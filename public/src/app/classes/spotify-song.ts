export class SpotifySong {

  constructor(
    public name: string,
    public popularity: number,
    public uri: string,
    public votes = 0,
    public tracks: {items: {name:string, popularity: number, uri: string}[]},
  ) { }
}
