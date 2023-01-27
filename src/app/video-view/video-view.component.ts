import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchBarService } from '../search-bar.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  public youtubeURL = '';
  
  constructor(public searchBarService: SearchBarService){}

  ngOnInit(){
    this.searchBarService.url.subscribe(url => this.youtubeURL = url.replace('watch?v=','embed/'));
  }

  getURL(){
    return this.youtubeURL;
  }

}


