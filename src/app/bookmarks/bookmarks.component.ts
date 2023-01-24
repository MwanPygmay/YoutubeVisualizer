import { Component } from '@angular/core';
import { BookMarkService } from '../book-mark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  public showBookmarks = false;
  public bookmarks: string[] = [];

  constructor (public bookmarksService: BookMarkService){
    let formerBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '');
    for (let i = 0; i < formerBookmarks.length; i++) {
      this.bookmarks.push(formerBookmarks[i]);
      
    }
  }

  showHideBookmarks(){this.showBookmarks = !this.showBookmarks}

  add(bookmark: string){
    this.bookmarks.push(bookmark);
    localStorage.setItem("bookmarks",JSON.stringify(this.bookmarks));
  }
}
