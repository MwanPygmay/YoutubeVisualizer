import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const historyUrls = JSON.parse(localStorage.getItem('history')!) || [];
    const bookmarksUrls = JSON.parse(localStorage.getItem('bookmarks')!) || [];
    return {historyUrls, bookmarksUrls};
  } 

  constructor() { }
}
