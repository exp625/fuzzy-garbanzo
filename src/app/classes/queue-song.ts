import {SpotifyTrackFull} from './spotify-track-full';

export class QueueSong {
  constructor (
    public spotifyTrackFull: SpotifyTrackFull,
    public votes: number,
    public voted: boolean
  ) {}
}
