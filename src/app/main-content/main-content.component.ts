import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ChannelsService } from '../side-nav/channels.service';
import { Video } from './video';
import * as data from './videos.json';
import * as chips from './chips.json';
import * as section1 from './section1.json';
import * as section2 from './section1.json';
import { Section } from '../section';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';

export interface ChipName {
  name: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  // encapsulation: ViewEncapsulation.None,

})
export class MainContentComponent implements OnInit {
  @Output() channels = new EventEmitter<Video[]>();


  videos: Video[] = (data as any).default;
  Names: ChipName[] = (chips as any).default;
  Section1: Section[] = (section1 as any).default;
  Section2: Section[] = (section2 as any).default;

  durationInSeconds = 3;
  constructor(private service: ChannelsService, private _snackBar: MatSnackBar) {}

  // changeBackgroundPanel() {
  //   const el = document.getElementById('menu');
  //   this._renderer2.setStyle(el, 'background-color', red);
  // }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit() {
    this.service.getChannels(this.videos);
  }
}
