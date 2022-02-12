import { ChannelsService } from './channels.service';
import { Video } from './../main-content/video';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatList } from '@angular/material/list';
import { Section } from '../section';


const SMALL_WIDTH_BREAKPOINT = 1000;
const SMALL_700_BREAKPOINT = 700;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @ViewChild(MatList) sidenav1: ElementRef | undefined;
  @ViewChild(MatList) sidenav2: ElementRef | undefined;

  channels: Video[];

  nav1: boolean;

  over: boolean;

  public isScreenSmall: boolean;

  Main: Section[] = [
    { name: 'Home', icon: 'home', target:'' },
    { name: 'Explore', icon: 'explore', target:'https://www.youtube.com/feed/explore' },
    { name: 'Subscriptions', icon: 'subscriptions', target:'https://www.youtube.com/feed/subscriptions' },
  ];
  SubMain: Section[] = [
    { name: 'Library', icon: 'video_library', target:'https://www.youtube.com/feed/library' },
    { name: 'History', icon: 'history', target:'https://www.youtube.com/feed/history' },
    { name: 'Your videos', icon: 'ondemand_video', target:'https://studio.youtube.com/channel/UCivQEqrLUo68AFDfJT9jlaA/videos' },
    { name: 'Watch later', icon: 'watch_later', target:'https://www.youtube.com/playlist?list=WL' },
    { name: 'Liked videos', icon: 'thumb_up', target:'https://www.youtube.com/playlist?list=LL' },
  ];
  MoreFromYoutube: Section[] = [
    { name: 'Youtube Premium', icon: 'live_tv', target:'https://www.youtube.com/premium' },
    { name: 'Gaming', icon: 'videogame_asset', target:'https://www.youtube.com/gaming' },
    { name: 'Live', icon: 'settings_input_antenna', target:'https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig' },
    { name: 'Sport', icon: 'pool', target:'https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw' },
  ];
  Settings: Section[] = [
    { name: 'Settings', icon: 'settings', target:'https://www.youtube.com/account' },
    { name: 'Report history', icon: 'flag', target:'https://www.youtube.com/reporthistory' },
    { name: 'Help', icon: 'help_outline', target:'' },
    { name: 'Send Feedback', icon: 'feedback', target:'' },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: ChannelsService
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
        this.nav1 = state.matches;

        var x: any = document.getElementById('sidenav1');
        if (this.isScreenSmall) x.classList.add('hide');
      });

    this.service.channels.subscribe({
      next: (channels) => {
        this.channels = channels.slice(0, 4);
      },
    });
  }

  toggleNav() {
    this.nav1 = !this.nav1;
    this.over = !this.nav1 && this.isScreenSmall;
  }
}
