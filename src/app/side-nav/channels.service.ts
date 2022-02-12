import { Video } from './../main-content/video';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  private videos = new BehaviorSubject<Video[]>([]);
  channels = this.videos.asObservable();

  constructor() {}

  getChannels(channels: Video[]) {
    this.videos.next(channels);
  }
}
