import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  bookmarks = JSON.parse(localStorage.getItem("bookmarks") || '');
  numberOfBookmarks = this.bookmarks.length;

}
